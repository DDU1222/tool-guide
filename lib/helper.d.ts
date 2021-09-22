import { Placement } from './placement';
/**
 * @description: 克隆目标元素
 * @param {HTMLElement} element DOM节点
 * @return {*}
 */
export declare const cloneElement: (element: HTMLElement) => Node;
/**
 * @description: 获取图片真实尺寸
 * @param {string} url 图片链接
 * @return {*}
 */
export declare const getImageSize: (url: string) => Promise<{
    width: number;
    height: number;
}>;
/**
 * @description:
 * @param {HTMLElement} element DOM节点
 * @param {string} url 图片链接
 * @param {Placement} placement 指定方向
 * @param {number} offset 偏移量
 * @return {*}
 */
export declare const getPlacement: (element: HTMLElement, url: string, placement: Placement.PlacementEnum, offset: number) => Promise<[string, string]>;
