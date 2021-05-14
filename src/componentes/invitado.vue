<template>
<div>
    <h3>Hola bienvenido Invitado {{this.$session.get('nombre')}}</h3>
     
                    
</div>          
</template>

<script>
export default {
 beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>