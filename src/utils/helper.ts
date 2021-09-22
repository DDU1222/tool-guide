/*
 * @Author: zhaochenxue
 * @Date: 2021-09-22 23:09:17
 * @LastEditTime: 2021-09-22 23:29:05
 * @LastEditors: Please set LastEditors
 * @Description: 函数
 * @FilePath: /guide/src/utils/helper.ts
 */
import { placementOffsetMap, Placement } from './placement'

/**
 * @description: 克隆目标元素
 * @param {HTMLElement} element DOM节点
 * @return {*}
 */
export const cloneElement = (element: HTMLElement): Node => {
  const clone = element.cloneNode(true) as HTMLElement
  // 获取元素的大小及其相对于视口的位置
  const rectObject = element.getBoundingClientRect()
  const { width, height, x, y } = rectObject
  clone.style.width = width + 'px'
  clone.style.height = height + 'px'
  clone.style.position = 'absolute'
  clone.style.left = x + 'px'
  clone.style.top = y + 'px'
  clone.style.margin = '0'
  
  return clone
}


/**
 * @description: 获取图片真实尺寸
 * @param {string} url 图片链接
 * @return {*}
 */
export const getImageSize = (url: string): Promise<{ width: number, height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = function() {
      return resolve({ width: img.width, height: img.height })
    }
    img.onerror = function (err) {
      reject(err)
    }
  })
}

/**
 * @description: 
 * @param {HTMLElement} element DOM节点
 * @param {string} url 图片链接
 * @param {Placement} placement 指定方向
 * @param {number} offset 偏移量
 * @return {*}
 */
export const getPlacement = async (element: HTMLElement, url: string, placement: Placement.PlacementEnum, offset: number): Promise<[string, string]> => {
  // 获取元素的大小及其相对于视口的位置
  const rectObject = element.getBoundingClientRect()
  const { width: rectWidth, height: rectHeight, x, y } = rectObject
  const { width, height } = await getImageSize(url)
  const [offsetTop, offsetLeft] = placementOffsetMap[placement]({ rw: rectWidth, rh: rectHeight, cw: width, ch: height, offset })
  return [y + offsetTop + 'px', x + offsetLeft + 'px']
}