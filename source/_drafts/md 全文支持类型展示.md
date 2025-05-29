---
title: MD 全文支持类型展示
tags: []
categories: [Mess]
date: 2026-01-01
---

## 容器测试

{% note tip %}
**💡 提示操作**
{% endnote %}

{% note danger %}
**危险操作：**  
此操作不可逆，请谨慎执行！
{% endnote %}

{% note warning %}
**警告操作：**
{% endnote %}

{% note success %}
**成功操作：**
{% endnote %}


## 图表测试
{% chart 80% 300 %}
{
type: 'line',
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{
label: 'My dataset',
backgroundColor: 'rgb(255, 99, 132)',
borderColor: 'rgb(255, 99, 132)',
data: [0, 10, 5, 2, 20, 30, 45]
}]
},
options: {
responsive: true,
title: {
display: true,
text: 'Chart.js Line Chart'
}
}
};
{% endchart %}

## 任务列表

- [ ] 苹果
- [x] 香蕉

## 测试图片
哈哈，你看到我了

哈哈，你看到我了哈哈，你看到我了哈哈，你看到我了哈哈，你看到我了哈哈，你看到我了哈哈，你看到我了哈哈，你看到我了

## 测试隐藏文字
### 1
<details>
<summary>点击查看详情</summary>
<p>
测试隐藏文字
</p>
</details>

### 2

{% spoiler 默认配置效果 %}

{% spoiler 这是一段隐藏的话 %}