import { createRouter, createWebHashHistory } from "vue-router"
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
    name: "editNote",
    component: AuthView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
