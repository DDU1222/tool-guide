/*
 * @Author: zhaochenxue
 * @Date: 2021-09-22 13:59:57
 * @LastEditTime: 2021-09-23 00:24:11
 * @LastEditors: Please set LastEditors
 * @Description: init
 * @FilePath: /guide/src/utils/index.ts
 */

import { Placement } from './placement'
import storage from './storage'
import { cloneElement, getPlacement } from './helper'

export namespace Guide {
  export interface Step {
    // 元素
    element: HTMLElement | string | null
    // 提示内容
    content: string
    // 提示内容方位
    placement: Placement.PlacementEnum
  }

  export type Steps = Step[]

  export type StepIndex = keyof Steps

  export interface GuideOptions {
    // 步骤
    steps: Guide.Steps
    // 高亮元素与指引图间隙
    offset?: number
    // 数据存储key
    storageKey?: string
  }
}

export default class Guide {
  steps: Guide.Steps = []
  domBox: HTMLElement = document.createElement('div')
  offset: number = 8
  storageKey: string = ''
  public stepIndex: Guide.StepIndex = 0
  /**
   * @description: 构造函数
   * @param {Guide.GuideOptions} 初始化变量
   * @return {*}
   */
  constructor({ steps, offset, storageKey }: Guide.GuideOptions) {
    this.steps = steps
    storageKey && (this.storageKey = storageKey)
    offset && (this.offset = offset)
    this.initBox()
  }

  /**
   * @description: 初始化盒子
   * @param {*}
   * @return {*}
   */
  initBox() {
    this.domBox.id = 'guideBox'
    this.domBox.style.position = 'fixed'
    this.domBox.style.top = '0'
    this.domBox.style.bottom = '0'
    this.domBox.style.left = '0'
    this.domBox.style.right = '0'
    this.domBox.style.zIndex = '100'
    this.domBox.style.background = 'rgba(0,0,0,.5)'
    this.domBox.style.display = 'none' 
    document.body.appendChild(this.domBox)
  }

  /**
   * @description: 开始显示步骤
   * @param {*}
   * @return {*}
   */
  async startStep() {
    // 开始判断
    if (Number(this.stepIndex) <= 0) {
      const result = await this.beforeEnter()
      if (!result) return
    }
    // 结束判断
    if (Number(this.stepIndex) >= this.steps.length) {
      await this.afterLeave()
      return this.destroy()
    }
    // 先清空盒子
    this.domBox.innerHTML = ''
    const currentStep: Guide.Step = this.steps[this.stepIndex] as Guide.Step
    const { element, content, placement } = currentStep
    // 判断非空
    let selector: HTMLElement | null = null
    if (typeof element === 'string') {
      selector = document.querySelector(element)
    } else {
      selector = element
    }
    if (!selector) return
    // 克隆高亮元素
    const target = cloneElement(selector)
    this.domBox.appendChild(target)
    // 创建指引图
    const tip = document.createElement('img') as HTMLImageElement
    tip.src = content
    const [top, left] = await getPlacement(selector, content, placement, this.offset)
    tip.style.position = 'absolute'
    tip.style.top = top
    tip.style.left = left
    // 点击跳转下一步
    tip.onclick = () => {
      this.stepIndex = Number(this.stepIndex) + 1
      this.startStep()
    }
    this.domBox.appendChild(tip)
    // 显示盒子
    this.domBox.style.display = 'block'
  }

  /**
   * @description: 销毁
   * @param {*}
   * @return {*}
   */
  destroy() {
    document.body.removeChild(this.domBox)
  }

  /**
   * @description: 第一步开始前
   * @param {*}
   * @return {*}
   */
  beforeEnter() {
    return new Promise((resolve, reject) => {
      if (this.storageKey) {
        resolve(!storage.get(this.storageKey))
      } else {
        resolve(true)
      }
    })
  }

  /**
   * @description: 最后一步结束后
   * @param {*}
   * @return {*}
   */
  afterLeave() {
    return new Promise((resolve, reject) => {
      if (this.storageKey) {
        resolve(storage.set(this.storageKey, 1))
      } else {
        resolve(true)
      }
    })
  }
}