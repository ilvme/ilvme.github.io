---
title: GDOM 三期历程
date: 2022-03-01
tags: [gdom]
---



## 搭建笔记

### 新建项目

```bash
➜  code npm create vue@latest
Need to install the following packages:
  create-vue@3.7.3
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Project name: … gdom-ui-v3
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /Users/kangjia/Developer/code/gdom-ui-v3...

Done. Now run:

  cd gdom-ui-v3
  npm install
  npm run format
  npm run dev
```

移除默认代码。

### 安装 sass

```bash
npm install -D sass-loader node-sass
```

### 安装 Element Plus

```bash
npm install element-plus --save
npm install @element-plus/icons-vue

## 按需导入
npm install -D unplugin-vue-components unplugin-auto-import
```

**Element Plus 按需导入配置，在 vite.config.js 里添加**

```js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
],
```

按需导入配置全局默认 size 和 zIndex，修改 App 文件，如下

```vue
<template>
  <el-config-provider :size="elConfig.size" :z-index="elConfig.zIndex">
    <RouterView />
  </el-config-provider>
</template>
<script setup>
import {reactive} from "vue";
import { RouterView } from 'vue-router'

const elConfig = reactive({
  zIndex: 3000,
  size: 'small', // small、large、default
})
</script>
```

**Icon 导入配置，暂时不考虑按需导入**

```js
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

### 安装 Echarts

```bash
npm install echarts --save
```

按需引入

```js
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
  // ...
});
```

### 安装 axios、dayjs、lodash

```bash
npm install axios

npm install dayjs

npm i --save lodash
```

### 安装 vue-i18n、VueUse

```bash
npm install vue-i18n

npm i @vueuse/core @vueuse/components
npm i @vueuse/integrations

```

### 安装 js-cookie、jsencrypt

```bash
npm install --save js-cookie
npm i jsencrypt
```

### 安装 highlight.js

```bash
npm install highlight.js --save
```

### 安装 file-saver

```bash
npm install file-saver --save
```

