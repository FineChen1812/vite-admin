<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header> 
          <ToggleSidebar/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts' setup>
import ToggleSidebar from "./AppHeader/ToggleSidebar.vue";
import AppMenu from './AppMenu/index.vue';
</script>


<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-header{
  display: flex;
  align-items: center;
}
.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-container {
  height: 100vh;
}
</style>