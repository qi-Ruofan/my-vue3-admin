<template>
  <header class="header">
    <div class="header-tit">
      <h1>国信e采</h1> ｜ <h2>招标投标交易平台</h2>
    </div>
    <div class="header-uesr">
      <el-space :size="20">
        <el-dropdown>
          <span class="el-dropdown-link">
            Dropdown List
            <el-icon class="el-icon--right">
              <IEpArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
              国信创新科技股份有限公司
            <el-icon class="el-icon--right">
              <IEpArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            供应商
            <el-icon class="el-icon--right">
              <IEpArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-link :underline="false" @click="signOut">
          <el-icon color="#fff"><IEpSwitchButton /></el-icon>
          退出
        </el-link>
      </el-space>
    </div>
  </header>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function signOut() {
  router.push({
    path: '/login'
  })
}
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // color: #fff;
  // background: #027BD0;
  .header-tit {
    display: flex;
    align-items: center;
  }
  .header-uesr {
  }
}
</style>
<style lang="scss">
.header {
  .el-dropdown {
    color: #fff !important;
    line-height: normal !important;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
  .el-link {
    color: #fff !important;
    &:hover {
      color: #fff;
    }
  }
  .el-icon {
    margin-right: 5px;
  }
}

</style>
