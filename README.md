# 新手引导使用指南

背景

伙伴们是不是都接到过类似的活，新手引导 - 选中页面上的某个元素高亮并将其他部分用蒙层盖住，加上一个指引说明和下一步。工作量不大，每次都是一顿操作就加上了，但是日复一日，当我们再次遇到类似的需求，是不是非常悔恨上一次为什么不做个通用的呢？ 身为程序媛，我也走过同样的路，并且这条路都快走成水泥道了、、、


所以这次下定决心，这次一定搞个通用的，给小哥哥用上！！！


使用案例：


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