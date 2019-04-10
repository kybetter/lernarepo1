# 测试 Vue 组件

#### 这个项目测试了如何编写一个基于 Vue 的 UI 组件库

只要按照我的配置就可以完成这个架子的搭建，

安装：`yarn add @kybetter/lernarepo1`

在Vue项目中使用：
```
// main.js
import Vue from 'vue';
import ZlUi from '@kybetter/lernarepo1';

Vue.use(ZlUi);
// ...
```
```
// App.vue

<zl-title>我是一个标题组件</zl-title>

```