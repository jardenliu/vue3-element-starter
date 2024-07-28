<template>
  <el-config-provider :locale="zhCn">
    <div>
      <HelloWorld msg="app"></HelloWorld>
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>

      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
