<script setup>
import { ref } from "vue"
import request from "@/utils/request.js"
import { useUserStore } from "@/stores/user"
import router from "@/router"
const userFormRef = ref()
const userForm = ref({})
const store = useUserStore()
const submitForm = async () => {
  const res = await request.post("/users/login", userForm.value)
  console.log(res)
  if (res.data === "admin") {
    store.setRole("admin")
  } else store.setRole("reader")
  localStorage.setItem("token", "liusuimin")
  router.push("/index")
}
</script>

<template>
  <div>
    <el-form
      ref="userFormRef"
      style="max-width: 600px"
      :model="userForm"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="username">
        <el-input v-model="userForm.username" type="text" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="userForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"> Login </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
