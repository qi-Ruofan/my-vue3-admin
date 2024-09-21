<template>
  <el-card class="box-card" shadow="hover">
    <div class="common-card">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <!-- <div class="line"></div>
      <div class="total">
        <slot name="footer"></slot>
      </div> -->
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang='scss' scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: left;
  color: #666;
}
.title::before {
  content: '';
  display: inline-block;
  margin-right: 10px;
  width: 3px;
  height: 15px;
  background: #007ccc;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.content {
  height: 370px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>
<style lang='scss' >
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.increase {
  height: 0;
  width: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  height: 0;
  width: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
