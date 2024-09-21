<template>
  <div class="home">
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="dealt">
          <common-card title="待办任务">
            <template v-slot:content>
              <el-table :data="tableData" style="width: 100%;height: 100%;">
                <el-table-column type="index" label="序号" width="55" align="center" />
                <el-table-column prop="processName" label="审核类型" width="120" />
                <el-table-column prop="tenderNo" label="业务编号" width="120" />
                <el-table-column prop="tenderName" label="业务名称" width="120" />
                <el-table-column prop="createDate" label="提交时间" width="140" />
                <el-table-column fixed="right" label="操作" min-width="120">
                  <template #default>
                    <el-button link type="primary" size="small">
                      处理
                    </el-button>
                    <el-button link type="primary" size="small">流程跟踪</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </common-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="date">
          <common-card title="开标提醒">
            <template v-slot:content>
              <div class="date-tip">
                <el-icon><IEpBellFilled /></el-icon>
                今日有标
              </div>
              <Calendar />
            </template>
          </common-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt20">
      <el-col :span="16">
        <div>
          <common-card title="近期走势">
            <template v-slot:content>
              <v-chart class="chart" :option="option" autoresize/>
            </template>
          </common-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <common-card title="进度数据">
            <template v-slot:content>
              <v-chart class="chart" :option="option2" autoresize/>
            </template>
          </common-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import CommonCard from '@/components/CommonCard/index.vue'
import Calendar from '@/components/Calendar/index.vue'

interface tableType {
  createDate: string
  processName: string
  tenderNo: string
  tenderName: string
}
interface optionType {
  [index: string]: unknown
}

let tableData = ref<tableType[]>([])
let option = ref<optionType>({})
let option2 = ref<optionType>({})

onMounted(() => {
  getTable()
  initChart()
})

const getTable = () => {
  tableData.value = [
    {
      processName: 'Tom',
      tenderNo: 'CA 90036',
      tenderName: '材料选购',
      createDate: '2016-05-03',
    },
    {
      processName: 'Jack',
      tenderNo: 'CA 90036',
      tenderName: '材料选购',
      createDate: '2016-05-03',
    },
    {
      processName: 'Marry',
      tenderNo: 'CA 90036',
      tenderName: '材料选购',
      createDate: '2016-05-03',
    },
    {
      processName: 'Lyli',
      tenderNo: 'CA 90036',
      tenderName: '材料选购',
      createDate: '2016-05-03',
    },
  ]
}

const initChart = () => {
  option.value ={
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };       
  option2.value = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };  
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .dealt {
    height: 370px;
  }
  .date {
    position: relative;
    .date-tip {
      padding-left: 10px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 15px;
      width: 100px;
      line-height: 32px;
      background: #ffcfc0;
      font-family: PingFangSC-Medium;
      border-radius: 24px 0 0 24px;
      color: #ff6030;
      box-sizing: border-box;
    }
  }

}
</style>
<style lang='scss'>
.home {
  .el-col {
    
  }
}
</style>
