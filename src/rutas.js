import IniciarSesion from './componentes/iniciarSesion.vue'
import Inicio from'./componentes/inicio.vue'
import Registro from './componentes/registro.vue'
import Admin from './componentes/admin.vue'
import Usuario from './componentes/usuario.vue'
import Invitado from './componentes/invitado.vue'

export const rutas = [
    {path:'/',component:Inicio,name:'home'},
    {path:'/registro',component:Registro,name:'registro'},
    {path: '/admin',component:Admin,name:'admin'},
    
    {path:'/usuario', component: Usuario,name:'usuario'}, 
    {path:'/invitado', component: Invitado,name:'invitado'}, 
    {path:'/sesion', component: IniciarSesion,name:'sesion'}, 
    {path:'*' ,redirect:'/'}, /*Cuando coloca cualquier otra cosa diferente lo redrirecciona a pagina de inicio*/
 
    ]

   