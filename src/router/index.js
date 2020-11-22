// imports necesarios
import Vue from 'vue'
import Router from 'vue-router'

// Componentes
import Home from '../components/home/Home'
import Featured from '../components/featured/featured'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    }, 
    {
      path: '/home',
      component: Home, 
      props: true
    },
    {
      path: '/featured', 
      name: 'Featured', 
      component: Featured, 
      props: true
    }
  ]
}); 
