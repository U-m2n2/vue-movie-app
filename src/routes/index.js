import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Movie from '../views/Movie'
import About from '../views/About'
import NotFound from '../vies/NotFound'

export default createRouter({

  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0}
  },

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})