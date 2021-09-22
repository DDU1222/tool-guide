declare const _default: {
    /**
     * @description: 获取存储值
     * @param {string} key storage key
     * @param {T} defaultValue 默认值
     * @return {*}
     */
    get<T>(key: string, defaultValue?: T | undefined): T | undefined;
    /**
     * @description: 赋值
     * @param {string} key storage key
     * @param {T} value storage value
     * @return {*}
     */
    set<T_1>(key: string, value: T_1): boolean;
    /**
     * @description: 清除
     * @param {string} key
     * @return {*}
     */
    remove(key: string): void;
};
export default _default;
