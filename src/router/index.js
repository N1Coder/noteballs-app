import { createRouter, createWebHashHistory } from "vue-router"
import { useStoreUser } from "@stores/storeUser.js"
import NotesView from "@views/NotesView.vue"
import StatsView from "@views/StatsView.vue"
import EditNoteView from "@views/EditNoteView.vue"
import AuthView from "@views/AuthView.vue"

const routes = [
  {
    path: "/",
    name: "notes",
    component: NotesView,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsView,
  },
  {
    path: "/editNote/:id",
    name: "editNote",
    component: EditNoteView,
  },
  {
    path: "/auth",
    name: "authView",
    component: AuthView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to) => {
  const storeUser = useStoreUser()

  if (!storeUser.user.uid && to.name !== "authView") {
    return { name: "authView" }
  }

  if (storeUser.user.uid && to.name === "authView") {
    return false
  }
})

export default router
