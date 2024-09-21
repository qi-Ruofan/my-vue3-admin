import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import '@/assets/styles/reset.scss'
import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/common.scss'

// 引入 echarts 和 vue-echarts
import * as echarts from 'echarts'
import { use } from 'echarts/core'
import Vchart from "vue-echarts"

// 引入必要的 ECharts 模块
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components'

// 使用 ECharts 模块
use([CanvasRenderer, PieChart, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])


const app = createApp(App)

// 注册全局 ECharts 实例
app.config.globalProperties.$echarts = echarts
// 注册全局组件
app.component("v-chart", Vchart)


app.use(store).use(router).mount('#app')
