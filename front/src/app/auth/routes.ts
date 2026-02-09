import loginView from './login.vue'
import registerView from './register.vue'
import resetView from './reset.vue'
import activateView from './activate.vue'
import resendView from './resend.vue'
import { RouterView } from 'vue-router'

export const authRoutes = {
  path: '/auth',
  name: 'auth',
  component: RouterView,  
  children: [
    { path: 'login', name: 'login', component: loginView},
    { path: 'register', name: 'register', component: registerView},
    { path: 'reset', name: 'reset', component: resetView},
    { path: 'resend', name: 'resend', component: resendView},
    { path: 'activate', name: 'activate', component: activateView}
  ]
}
