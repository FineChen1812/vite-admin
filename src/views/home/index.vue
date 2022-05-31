<template>
  <h1>首页</h1>
  <!-- <h1>{{ $store.state.count }}</h1> -->
</template>

<script lang="ts" setup>
// import { useStore } from "vuex";
import { useStore } from '../../store';

const store = useStore();
console.log(store.state.count)
</script>

<style lang="scss" scoped>
// @import '@/style/variables.scss';
h1{
  color: $color;
}
</style>