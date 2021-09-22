
export namespace Placement {
  export type PlacementEnum =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

  export interface PlacementUnit {
    // 高亮元素宽
    rw: number
    // 高亮元素高
    rh: number
    // 提示元素宽
    cw: number
    // 提示元素高
    ch: number
    // 偏移量
    offset: number
  }
  
  export type PlacementOffsetMap = {
    [key in PlacementEnum]: ({ rw, rh, cw, ch, offset }: PlacementUnit) => [offsetTop: number, offsetLeft: number]
  }
}

// 在上 top减去偏移量  在下 top加上偏移量  在左 left减去偏移量  在右 left加上偏移量
export const placementOffsetMap: Placement.PlacementOffsetMap = {
  top: ({ rw, rh, cw, ch, offset }) => {
    return [-ch - offset, rw/2 - cw/2]
  },
  topLeft: ({ rw, rh, cw, ch, offset }) => {
    return [-ch - offset, 0]
  },
  topRight:  ({ rw, rh, cw, ch, offset }) => {
    return [-ch - offset, rw - cw]
  },
  bottom: ({ rw, rh, cw, ch, offset }) => {
    return [rh + offset, rw/2 - cw/2]
  },
  bottomLeft: ({ rw, rh, cw, ch, offset }) => {
    return [rh + offset, 0]
  },
  bottomRight: ({ rw, rh, cw, ch, offset }) => {
    return [rh + offset, rw - cw]
  },
  left: ({ rw, rh, cw, ch, offset }) => {
    return [rh/2 - ch/2, -cw - offset]
  },
  leftTop: ({ rw, rh, cw, ch, offset }) => {
    return [0, -cw - offset]
  },
  leftBottom: ({ rw, rh, cw, ch, offset }) => {
    return [rh - ch, -cw - offset]
  },
  right: ({ rw, rh, cw, ch, offset }) => {
    return [rh/2 - ch/2, rw + offset]
  },
  rightTop: ({ rw, rh, cw, ch, offset }) => {
    return [0, rw + offset]
  },
  rightBottom: ({ rw, rh, cw, ch, offset }) => {
    return [rh - ch, rw + offset]
  },
};