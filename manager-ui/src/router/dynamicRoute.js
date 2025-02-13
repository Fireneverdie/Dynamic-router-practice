import BookList from "@/views/book/BookList.vue"
import BookManger from "@/views/book/BookManger.vue"
import Home from "@/views/Home.vue"
import NotFound from "@/views/NotFound.vue"

const dynamicRoutes = [
  {
    path: "/index",
    component: Home,
    name: "index",
  },
  {
    path: "/book/book-list",
    name: "book-list",
    component: BookList,
  },
  {
    path: "/book/book-manager",
    name: "book-manager",
    component: BookManger,
    meta: {
      requireAdmin: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: 404,
    component: NotFound,
  },
]

export default dynamicRoutes
