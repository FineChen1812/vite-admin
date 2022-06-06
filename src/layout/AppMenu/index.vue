<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/menuOne">
      <template #title>
        <el-icon><Tickets /></el-icon>
        <span>页面一</span>
      </template>
      <el-menu-item index="/menuOne/one">item one</el-menu-item>
      <el-menu-item index="/menuOne/two">item two</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/menuTwo">
      <template #title>
        <el-icon><Tools /></el-icon>
      <span>页面二</span>
      </template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
      <el-menu-item index="1-4-1">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Menu as IconMenu,Tickets, Tools } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>