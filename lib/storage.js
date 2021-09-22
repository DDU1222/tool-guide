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
    get: function (key, defaultValue) {
        try {
            return parseJSON(localStorage.getItem(key));
        }
        catch (_a) {
            return defaultValue;
        }
    },
    /**
     * @description: 赋值
     * @param {string} key storage key
     * @param {T} value storage value
     * @return {*}
     */
    set: function (key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        catch (_a) {
            return false;
        }
    },
    /**
     * @description: 清除
     * @param {string} key
     * @return {*}
     */
    remove: function (key) {
        localStorage.removeItem(key);
    }
};
/**
 * @description: parseJSON
 * @param {*} T
 * @return {*}
 */
var parseJSON = function (value) {
    return JSON.parse(value || '');
};
//# sourceMappingURL=storage.js.map