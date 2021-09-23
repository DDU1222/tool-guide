# 新手引导使用指南

A General Novice Guidance Solution by Clicking the Next Button

一个通过点击下一步按钮来完成新手操作流程的解决方案

```typescript
const guide = new Guide({
  steps: [{
    element: '.section_5',
    placement: 'bottom',
    content: 'https://yppphoto.hibixin.com/yppphoto/8c936439588546be907df129bc48d1f0.png'
  }, {
    element: '.section_7',
    placement: 'bottomLeft',
    content: 'https://yppphoto.hibixin.com/yppphoto/dd4a5f0a24154e36a09c67e6f8496aef.png'
  }, {
    element: '.image_4',
    placement: 'bottomRight',
    content: 'https://yppphoto.hibixin.com/yppphoto/6114d84ed9aa425e97363abf98643813.png'
  }],
  storageKey: 'demo'
})

setTimeout(() => {
  guide.startStep()
}, 2000)
```



参数


Guide.GuideOptions

| 参数         | 类型           | 描述           | 默认值 | 是否必传 |
| ---------- | ------------ | ------------ | --- | ---- |
| steps      | Guide.Step[] | 步骤           | []  | 是    |
| offset     | number       | 高亮元素与指引图间隙   | 8px | 否    |
| storageKey | string       | 数据存储key 不传不存 | ''  | 否    |



Guide.Step

| 参数        | 类型                          | 描述         | 默认值 | 是否必传 |
| --------- | --------------------------- | ---------- | --- | ---- |
| element   | HTMLElement | string | null | 高亮元素       |     | 是    |
| content   | string                      | 提示内容 现在是张图 |     | 是    |
| placement | Placement.PlacementEnum     | 提示内容方位     |     | 是    |



Placement.PlacementEnum

```typescript
export type PlacementEnum =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

```


demo 启动 

```
npm run dev
```