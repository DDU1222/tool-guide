import { Placement } from './placement';
export declare namespace Guide {
    interface Step {
        element: HTMLElement | string | null;
        content: string;
        placement: Placement.PlacementEnum;
    }
    type Steps = Step[];
    type StepIndex = keyof Steps;
    interface GuideOptions {
        steps: Guide.Steps;
        animation?: Boolean;
        offset?: number;
        storageKey?: string;
    }
}
export default class Guide {
    steps: Guide.Steps;
    domBox: HTMLElement;
    offset: number;
    storageKey: string;
    stepIndex: Guide.StepIndex;
    /**
     * @description: 构造函数
     * @param {Guide.GuideOptions} 初始化变量
     * @return {*}
     */
    constructor({ steps, offset, storageKey }: Guide.GuideOptions);
    /**
     * @description: 初始化盒子
     * @param {*}
     * @return {*}
     */
    initBox(): void;
    /**
     * @description: 开始显示步骤
     * @param {*}
     * @return {*}
     */
    startStep(): Promise<void>;
    /**
     * @description: 销毁
     * @param {*}
     * @return {*}
     */
    destroy(): void;
    /**
     * @description: 第一步开始前
     * @param {*}
     * @return {*}
     */
    beforeEnter(): Promise<unknown>;
    /**
     * @description: 最后一步结束后
     * @param {*}
     * @return {*}
     */
    afterLeave(): Promise<unknown>;
}
