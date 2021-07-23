import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {return originalPush.call(this, location).catch(err => err)}

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: '',
    component: Index,
    redirect: '/home',
    children: [{
          path: 'index',
          name: 'index',
          component: () => import('../views/index'),
        }, {
          path: 'home',
          name: 'home',
          component: () => import('../views/home'),
    }],
    }, {
      path: '*',
      redirect: '/',
    }]
});

router.afterEach((to, form, next) => {

  window.scrollTo(0, 0);
})

export default router
