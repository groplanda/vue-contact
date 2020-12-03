import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/contact/:id',
    component: Contact,
    name: 'contact',
    props: true
  }
]

export default new VueRouter({
  routes
})
