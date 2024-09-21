<template>
  <el-form inline="true" :model="formInData" class="form-search">
    <el-form-item label="路由ID">
      <el-input v-model="formInData.id" placeholder="Approved by" clearable />
    </el-form-item>
    <el-form-item label="路由名称">
      <el-input v-model="formInData.name" placeholder="Approved by" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'

const formInData = reactive({
  id: '',
  name: '',
})
const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang='scss' scoped>
.form-search {
  display: flex;
  align-items: center;
  background: #f6fcff;
  padding: 20px;
  border: 1px solid #e4e7ed;
}
</style>
