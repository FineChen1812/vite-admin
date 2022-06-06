<template>
  <el-icon @click="handleCollapse"><Expand /></el-icon>
</template>

<script lang="ts" setup>
import { Expand } from "@element-plus/icons-vue";
import { useStore } from '../../store';
const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style lang="scss" scoped>
.el-icon{
  font-size: 24px;
  cursor: pointer;
}
</style>