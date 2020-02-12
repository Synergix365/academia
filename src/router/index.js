import Vue from 'vue';
import VueRouter from 'vue-router';
import Agreement from '../views/Agreement.vue';
import SignUp from '../views/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'agreement',
    component: Agreement,
  },
  {
    path: '/SignUp',
    name: 'signUp',
    component: SignUp,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
