<template>
  <el-menu
    default-active="1"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <div class="collapse" @click="changeCollapse">
      <el-space>
        <i :class="['iconfont', isCollapse ? 'icon-collapse' : 'icon-collapse1' ]"></i>
        <span v-if="isShow">收起导航</span>
      </el-space>
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><IEpLocation /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="router" >路由管理</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
let isCollapse = ref(false)
let isShow = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const changeCollapse = () => {
  if(isShow.value) {
    isShow.value = !isShow.value
    setTimeout(() => {
      isCollapse.value = !isCollapse.value
    })
  } else {
    isCollapse.value = !isCollapse.value
    setTimeout(() => {
      isShow.value = !isShow.value
    })
  }
 
  
}
</script>

<style lang='scss' scoped>
.collapse {
  padding: 10px 25px;
  text-align: left;
}
.iconfont {
  color: #007ccc !important;
}
</style>
<style lang='scss'>
.el-menu {
  height: calc(100vh - 60px);
  border: none;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  .el-menu-item.is-active {
    background: #e6f7ff;
    border-right: 3px solid #1890ff;
  }
  .el-icon {
    color: #007ccc !important;
  }
}

</style>
