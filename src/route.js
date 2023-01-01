
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
//import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoachList.vue';
//import CoachRegistration from './pages/coaches/CoachRegistration.vue';
//import RequestRecieve from './pages/requests/RequestRecieve.vue';
import NotFound from './pages/NotFound.vue';
//import ContactCoach from './pages/requests/ContactCoach.vue';
//import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';
const CoachDetails=defineAsyncComponent(()=> import('./pages/coaches/CoachDetails.vue'));
const CoachRegistration=defineAsyncComponent(()=> import('./pages/coaches/CoachRegistration.vue'));
const ContactCoach=defineAsyncComponent(()=> import('./pages/requests/ContactCoach.vue'));
const RequestRecieve=defineAsyncComponent(()=>import('./pages/requests/RequestRecieve.vue'));
const UserAuth=defineAsyncComponent(()=>import('./pages/auth/UserAuth.vue'));
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path:'/',redirect:'/coaches'},
      {path:'/coaches',component:CoachList},
      {path:'/coaches/:id',component:CoachDetails,props:true,children:[
        {path:'contact',component:ContactCoach}
      ]},
      {path:'/register',component:CoachRegistration,meta:{requireAuth:true}},
      {path:'/requests',component:RequestRecieve,meta:{requireAuth:true}},
      {path:'/auth',component:UserAuth,meta:{requireUnAuth:true}},
      {path:'/:notFound(.*)',component:NotFound}
    ],
    
  });
  router.beforeEach(function(to,_,next){
if(to.meta.requireAuth&&!store.getters.isAuth){
next('/auth')
}else if(to.meta.requireUnAuth&&store.getters.isAuth){
  next('/coaches');
}else{
  next();
}
  });
  export default router;