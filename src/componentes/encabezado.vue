<template> 
    <div class="bg-info">
        <nav class="navbar navbar-light ">
            <h5 class="my-0 mr-md-auto font-weight-normal " >
                <router-link  class="text-white" to="/" >BackIndra</router-link>
            </h5>
            <div class="form-inline " v-if="!actualizarLogueo">
              
                <router-link  to="sesion" ><a class="nav-link text-white" >Iniciar sesion</a></router-link>
                <router-link  to="registro" ><a class="nav-link text-white" >Registrarse</a></router-link>
             
               
            </div>
            
            <button   v-else v-on:click.prevent="logout" 
                       class="btn cerrar text-white">Cerrar sesion</button>        
            
        </nav>
      
        <hr>
    </div>

</template>
<script>
export default {
   props:['actualizarLogueo'],
 
  
  methods: {
    logout: function () {
      this.$emit('evento',false);
      this.$session.destroy()
      this.$router.push('/')
       
    }
  }
    
   
}
</script>

<style>
nav, .cerrar{
     background: #033C92;
    
}
a{
    color:white;
}
h5{
  font-weight: bold;
}

</style>