/*
 * @Author: your name
 * @Date: 2021-09-22 13:59:57
 * @LastEditTime: 2021-09-22 23:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guide/src/utils/index.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import storage from './storage';
import { cloneElement, getPlacement } from './helper';
var Guide = /** @class */ (function () {
    /**
     * @description: 构造函数
     * @param {Guide.GuideOptions} 初始化变量
     * @return {*}
     */
    function Guide(_a) {
        var steps = _a.steps, offset = _a.offset, storageKey = _a.storageKey;
        this.steps = [];
        this.domBox = document.createElement('div');
        this.offset = 8;
        this.storageKey = '';
        this.stepIndex = 0;
        this.steps = steps;
        storageKey && (this.storageKey = storageKey);
        offset && (this.offset = offset);
        this.initBox();
    }
    /**
     * @description: 初始化盒子
     * @param {*}
     * @return {*}
     */
    Guide.prototype.initBox = function () {
        this.domBox.id = 'guideBox';
        this.domBox.style.position = 'fixed';
        this.domBox.style.top = '0';
        this.domBox.style.bottom = '0';
        this.domBox.style.left = '0';
        this.domBox.style.right = '0';
        this.domBox.style.zIndex = '100';
        this.domBox.style.background = 'rgba(0,0,0,.5)';
        this.domBox.style.display = 'none';
        document.body.appendChild(this.domBox);
    };
    /**
     * @description: 开始显示步骤
     * @param {*}
     * @return {*}
     */
    Guide.prototype.startStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, currentStep, element, content, placement, selector, target, tip, _a, top, left;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(Number(this.stepIndex) <= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.beforeEnter()];
                    case 1:
                        result = _b.sent();
                        if (!result)
                            return [2 /*return*/];
                        _b.label = 2;
                    case 2:
                        if (!(Number(this.stepIndex) >= this.steps.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.afterLeave()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, this.destroy()];
                    case 4:
                        // 先清空盒子
                        this.domBox.innerHTML = '';
                        currentStep = this.steps[this.stepIndex];
                        element = currentStep.element, content = currentStep.content, placement = currentStep.placement;
                        selector = null;
                        if (typeof element === 'string') {
                            selector = document.querySelector(element);
                        }
                        else {
                            selector = element;
                        }
                        if (!selector)
                            return [2 /*return*/];
                        target = cloneElement(selector);
                        this.domBox.appendChild(target);
                        tip = document.createElement('img');
                        tip.src = content;
                        return [4 /*yield*/, getPlacement(selector, content, placement, this.offset)];
                    case 5:
                        _a = _b.sent(), top = _a[0], left = _a[1];
                        tip.style.position = 'absolute';
                        tip.style.top = top;
                        tip.style.left = left;
                        // 点击跳转下一步
                        tip.onclick = function () {
                            _this.stepIndex = Number(_this.stepIndex) + 1;
                            _this.startStep();
                        };
                        this.domBox.appendChild(tip);
                        // 显示盒子
                        this.domBox.style.display = 'block';
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description: 销毁
     * @param {*}
     * @return {*}
     */
    Guide.prototype.destroy = function () {
        document.body.removeChild(this.domBox);
    };
    /**
     * @description: 第一步开始前
     * @param {*}
     * @return {*}
     */
    Guide.prototype.beforeEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.storageKey) {
                resolve(!storage.get(_this.storageKey));
            }
            else {
                resolve(true);
            }
        });
    };
    /**
     * @description: 最后一步结束后
     * @param {*}
     * @return {*}
     */
    Guide.prototype.afterLeave = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.storageKey) {
                resolve(storage.set(_this.storageKey, 1));
            }
            else {
                resolve(true);
            }
        });
    };
    return Guide;
}());
export default Guide;
//# sourceMappingURL=index.js.map