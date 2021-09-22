export declare namespace Placement {
    type PlacementEnum = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    interface PlacementUnit {
        rw: number;
        rh: number;
        cw: number;
        ch: number;
        offset: number;
    }
    type PlacementOffsetMap = {
        [key in PlacementEnum]: ({ rw, rh, cw, ch, offset }: PlacementUnit) => [offsetTop: number, offsetLeft: number];
    };
}
export declare const placementOffsetMap: Placement.PlacementOffsetMap;
