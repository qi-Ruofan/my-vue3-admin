<template>
  <div class="router">
    <my-search></my-search>
    <el-space class="action-bar">
      <el-button type="primary">
        <el-icon><IEpPlus /></el-icon>
        新增
      </el-button>
      <el-link type="primary">
        <el-icon><IEpDownload /></el-icon>
        导出
      </el-link>
      <el-link type="primary">
        <el-icon><IEpUpload /></el-icon>
        导入
      </el-link>
    </el-space>
    <el-table
      class="router-table"
      :data="tableData"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="date" label="菜单名称" width="200"/>
      <el-table-column prop="id" label="id"  width="100"/>
      <el-table-column prop="parentId" label="上级id"  width="100"/>
      <el-table-column prop="type" label="菜单类型"  width="100">
        <template #default="scope">
          <el-tag :type="scope.row.type ? 'success':'warning'">{{ scope.row.type ? '菜单' : 'iframe' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="路由路径" width="300" />
      <el-table-column prop="address" label="组件路径" width="300"/>
      <el-table-column prop="address" label="权限标识" width="200"/>
      <el-table-column prop="sort" label="排序"  width="60"/>
      <el-table-column prop="isShow" label="是否隐藏" width="60">
        <template #default="scope">
          <div>
            {{scope.row.isShow ? '是' : '否'}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" fixed='right' min-width="260">
        <tempalet #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            <el-icon><IEpEdit /></el-icon>
            修改
          </el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="primary" plain>
            <el-icon><IEpPlus /></el-icon>
            新增
          </el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)" type="danger" plain>
            <el-icon><IEpDelete /></el-icon>
            删除
          </el-button>
        </tempalet>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts' setup>
import MySearch from '@/components/Search/index.vue'
import { ref } from 'vue'
interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[],
  sort: number,
  isShow: boolean,
  type: number,
  parentId: number
}
const load = (
  row: User,
  treeNode: unknown,
  resolve: (data: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        sort: 1,
        isShow: false,
        address: 'No. 189, Grove St, Los Angeles',
        type: 0,
        parentId: 0
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        sort: 2,
        isShow: false,
        address: 'No. 189, Grove St, Los Angeles',
        type: 0,
        parentId: 0
      },
    ])
  }, 1000)
}

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    sort: 1,
    isShow: false,
    address: 'No. 189, Grove St, Los Angeles',
    type: 0,
    parentId: 0
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    isShow: false,
    address: 'No. 189, Grove St, Los Angeles',
    sort: 2,
    type: 1,
    parentId: 0
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    isShow: false,
    address: 'No. 189, Grove St, Los Angeles',
    sort: 3,
    type: 0,
    parentId: 10000,
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        isShow: false,
        address: 'No. 189, Grove St, Los Angeles',
        sort: 1,
        type: 1,
        parentId: 0
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        isShow: false,
        address: 'No. 189, Grove St, Los Angeles',
        sort: 2,
        type: 0,
        parentId: 0
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    isShow: false,
    address: 'No. 189, Grove St, Los Angeles',
    sort: 4,
    type: 1,
    parentId: 0
  },
]
</script>

<style lang='scss' scoped>
.router {
  .router-table {
    width: 100%;
    margin-top: 20px;
  }
  .action-bar {
    width: 100%;
    margin-top: 20px;
  }
}

</style>
