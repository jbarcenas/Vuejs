import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {rutas} from './rutas.js'
import VueSession from 'vue-session'
import sesion from './componentes/iniciarSesion.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession);

const enrutador = new VueRouter({
  routes:rutas, //rutas que se quiere pasar
  mode: 'history' //para quitar el #
})

new Vue({
  el: '#app',
  router:enrutador,
  render: h => h(App)
})


/*enrutador.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log(sesion.$this.session.exists());
    next('/sesion');
  } else {
    next()
  }
})*/