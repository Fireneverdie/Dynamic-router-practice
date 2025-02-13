<script setup>
import { RouterView } from "vue-router"
import { useRouter, useRoute } from "vue-router"
import { useUserStore } from "@/stores/user"
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="route.fullPath"
          class="el-menu-vertical-demo"
          :router="true"
        >
          <el-menu-item index="/index">
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="/book">
            <template #title>
              <span>图书</span>
            </template>
            <el-menu-item
              index="/book/book-manager"
              v-if="userStore.role === 'admin'"
              >图书管理</el-menu-item
            >
            <el-menu-item index="/book/book-list">图书列表</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100vh;
  }
}
</style>
