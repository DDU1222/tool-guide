/*
 * @Author: zhaochenxue
 * @Date: 2021-09-22 22:21:04
 * @LastEditTime: 2021-09-22 23:33:21
 * @LastEditors: zhaochenxue
 * @Description: 函数
 * @FilePath: /guide/src/utils/storage.ts
 */
export default {
  /**
   * @description: 获取存储值
   * @param {string} key storage key
   * @param {T} defaultValue 默认值
   * @return {*}
   */
  get<T>(key: string, defaultValue?: T): T | undefined {
    try {
      return parseJSON<T>(localStorage.getItem(key))
    } catch {
      return defaultValue
    }
  },
  /**
   * @description: 赋值
   * @param {string} key storage key
   * @param {T} value storage value
   * @return {*}
   */
  set<T>(key: string, value: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  },
  /**
   * @description: 清除
   * @param {string} key
   * @return {*}
   */
  remove(key: string): void {
    localStorage.removeItem(key)
  },
}

/**
 * @description: parseJSON
 * @param {*} T
 * @return {*}
 */
const parseJSON = <T>(value: string | null): T => {
  return JSON.parse(value || '')
}