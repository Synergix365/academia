import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
