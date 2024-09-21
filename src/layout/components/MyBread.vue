<template>
  <el-breadcrumb class="bread" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss" scoped>
.bread {
  line-height: 30px;
  padding-left: 10px;
  margin-bottom: 20px;
  border-bottom: 1;
  // box-shadow: 0px 0px 7px #eee;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
}
</style>
