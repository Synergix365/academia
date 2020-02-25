import Vue from 'vue';
import VueRouter from 'vue-router';
import Agreement from '../views/Agreement.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'agreement',
    component: Agreement,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
