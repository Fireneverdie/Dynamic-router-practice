import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/views/Layout.vue"
import Login from "@/views/Login.vue"
import NotFound from "@/views/NotFound.vue"
import { useUserStore } from "@/stores/user"
import { useisGetterRouterStore } from "@/stores/loadRouter"
import dynamicRoutes from "./dynamicRoute"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/layout",
      name: "layout",
      component: Layout,
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isGetterRouterStore = useisGetterRouterStore()

  if (to.name === "login") {
    next()
  } else {
    if (localStorage.getItem("token")) {
      if (!isGetterRouterStore.isGetterRouter) {
        addDynamicROutes()
        next(to.fullPath)
      }
      next()
    } else {
      next("/login")
    }
  }
})

const addDynamicROutes = () => {
  const isGetterRouterStore = useisGetterRouterStore()
  if (router.hasRoute("layout")) {
    router.addRoute({
      path: "/layout",
      name: "layout",
      component: Layout,
    })

    dynamicRoutes.forEach((item) => {
      if (checkPermission(item)) router.addRoute("layout", item)
    })

    isGetterRouterStore.setGetterRouter(true)
  }
}

const checkPermission = (item) => {
  const store = useUserStore()
  if (item.meta) {
    return item.meta.requireAdmin && store.role === "admin"
  }
  return true
}

export default router
