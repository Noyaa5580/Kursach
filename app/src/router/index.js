import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import NewsView from '../views/NewsView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/catalog',
    component: CatalogView
  },
  {
    path: '/news',
    component: NewsView
  },
  {
    path: '/contacts',
    component: ContactsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router