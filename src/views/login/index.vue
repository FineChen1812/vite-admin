<template>
  <h1>登录页</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common';
import { onMounted } from 'vue';

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped></style>