<template>
<div class="container bg-white ">
    <div class="row d-flex justify-content-start align-items-center mt-sm-5 ">
        <div class="col-lg-5 col-10 ">
            <div class="pb-5 mt-sm-5"> <img src="imagenSesion.jpg" alt=""> </div>
        </div>
        <div class="col-lg-4 offset-lg-2 col-md-6 offset-md-3 ">
            <div class="mt-3 mt-md-5">
                <h5 class="text-center">Iniciar sesion</h5>
                <div v-if="error" class="alert alert-success" role="alert">
                  {{eMensaje}}
                </div>
                <form class="pt-4" v-on:submit.prevent="login">
                    <div class="d-flex flex-column pb-3"> 
                        <label for="email" class="form-control-label">Usuario</label> 
                        <input v-model="usuario" type="text"  id="emailId" class="form-control"> 
                      </div>
                    <div class="d-flex flex-column pb-3"> 
                      <label for="password">Password</label> 
                      <input v-model="password" type="password"  id="pwd" class="form-control"> 
                    </div>
                     <button type="submit" class="btn btn-primary btn-block mb-3">Enviar</button>
                </form>
            </div>
        </div>
    </div>      
</div>

</template>

<script>
export default {
 
  data(){
    return{
      usuario:'',
      password:'',
      error: false,
      eMensaje:'',
      
    }
  }, 
/* created(){
   this.login();
 },*/
 
  methods:{
  
     login(){
       this.respuesta='';
       let json = {
          "usuario" : this.usuario,
          "clave": this.password
        };
        this.$http.post('http://localhost:9098/usuarios',json)
        .then(respuestas =>{
          console.log(respuestas.body);
          return respuestas.json();
        })
        .then(respuesta =>{
            if(respuesta.status=="ok"){
                console.log(respuesta.perfil);
                this.$session.start();
                this.$session.set('nombre',respuesta.nombre);
                this.$session.set('id',respuesta.id);
                this.$session.set('perfil',respuesta.perfil);
                if(respuesta.perfil=="Administrador"){
                     this.$router.push('admin');
                }else if(respuesta.perfil=="Usuario"){
                    this.$router.push('usuario');
                }else{
                    this.$router.push('invitado');
                }
                
                this.$emit('evento',true);
             }else{
                
                this.error=true;
                this.eMensaje=respuesta.mensaje;
               
             }
                
        })
       /* .catch(error => {
          console.log(error);
        });*/
         
       }
      
    }
 
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
   

}
.color{
   background: blue;
}
img{
  width: 100%;
}
input {
    border-radius: 20px;
    margin-bottom: 20px;
    
}


</style>
