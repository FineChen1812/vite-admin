<template>
  <h1>登录页</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo} from '@/api/common';
import type { ILoginInfo } from '@/api/types/common';
import { onMounted,ref } from 'vue';
import { ElForm } from 'element-plus';


// 拿到form表单的类型
const form = ref<InstanceType <typeof ElForm> | null>(null)

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
    list.value = res.slide
  })
})
</script>

<style lang="scss" scoped></style>