<template>
 <div >
    <encabezado v-on:evento="actualizarLogin($event)" :actualizarLogueo="actualizarLogueo"></encabezado>
    <div class="container">
      <router-view v-on:evento="actualizarLogin($event)"></router-view>
      <pie></pie>
    </div>
    
  </div>

</template>

<script>
  import Encabezado from './componentes/encabezado'
  import Pie from './componentes/foter.vue'

  export default {
    data(){
      return{
       actualizarLogueo :this.$session.exists()
      }
    },
    components:{
      encabezado:Encabezado,
      pie:Pie
    }
    ,methods:{
      actualizarLogin(event){
        this.actualizarLogueo= event
        console.log("Entre aqui"+this.actualizarLogueo)
      }
    }
    
       
    
  }
</script>

<style>

body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color:  #033C92;

}


</style>
