import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Register from '@/components/Register';
import Login from '@/components/Login';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: 'login',
      name: 'login',
      component: Login,
    },
  ],
});
