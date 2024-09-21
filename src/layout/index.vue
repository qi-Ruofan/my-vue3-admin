<template>
  <el-container class="wrap">
    <el-header>
      <my-header />
    </el-header>
    <el-container>
      <el-aside width="220px">
        <my-aside />
      </el-aside>
      <el-main class="main">
        <my-bread></my-bread>
        <div style="overflow-y: auto;">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import MyHeader from "./components/MyHeader.vue";
import MyAside from './components/MyAside.vue';
import MyBread from './components/MyBread.vue'
</script>

<style lang='scss' scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    // overflow-y: auto;
  }
}
</style>
<style lang="scss">
.el-header {
  background: #027BD0;
  height: 48px;
  color: #fff;
}
.el-container {
  height: calc(100vh - 48px);
}
.el-aside {
  padding-right: 10px;
}
</style>
