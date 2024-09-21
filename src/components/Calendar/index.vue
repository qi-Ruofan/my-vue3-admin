<template>
  <el-calendar ref="calendar" class="custom-calendar" v-model="dateValue">
    <template #header="{ date }">
      <span>{{ date }}</span>
      <el-button-group>
        <el-button size="small" @click="selectDate('prev-month')">
          上个月
        </el-button>
        <el-button size="small" @click="selectDate('today')">今天</el-button>
        <el-button size="small" @click="selectDate('next-month')">
          下个月
        </el-button>
      </el-button-group>
    </template>
    <template #date-cell="{ data }">
      <div class="custom-date-cell">
        {{ data.day.split('-').slice(1).join('-') }}
      </div>
    </template>
  </el-calendar>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'element-plus'

const dateValue = ref(new Date())
const calendar = ref<CalendarInstance>()

const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>

<style lang='scss'>
.custom-calendar {
  height: 600px;
  /* 修改 el-calendar 内部表格单元格的样式 */
  .el-calendar-table .el-calendar-day {
    height: 50px; /* 设定单元格高度 */
    padding: 0;   /* 调整 padding 使单元格更紧凑 */
  }

  .custom-date-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;  /* 保证内容垂直居中 */
  }
}


</style>
