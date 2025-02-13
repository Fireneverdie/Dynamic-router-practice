### Simple dynamic route practic

This is a simple project to make me understand how the dynamic route work

forllow are the interpretion of what the application do

the manager-ui's port are 5173,it has a login page,it would send a request to server.

server was wrote by express framework.

Server would respond a role back,there are two role,admin and reader.

The manager-ui would load the route judge by the role.

tip:In order to test the functionality, you may need to manually clear the `localStorage` and the stored `role` in Pinia using the browser's developer tools.

key code

```v

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
```
