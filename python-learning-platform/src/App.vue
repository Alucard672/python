<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f7fa;
}

#app {
  height: 100vh;
  overflow: hidden;
}

/* 全局滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Element Plus 自定义样式 */
.el-menu {
  border-right: none !important;
}

.el-menu-item:hover {
  background-color: #f5f7fa !important;
}

.el-menu-item.is-active {
  background-color: #ecf5ff !important;
  color: #409eff !important;
}

.el-sub-menu__title:hover {
  background-color: #f5f7fa !important;
}

/* 代码高亮样式 */
.python .hljs-keyword {
  color: #0000ff;
}

.python .hljs-string {
  color: #008000;
}

.python .hljs-comment {
  color: #808080;
  font-style: italic;
}

.python .hljs-number {
  color: #ff0000;
}

.python .hljs-built_in {
  color: #0000ff;
}
</style>