import { createRouter, createWebHistory} from "vue-router"
import GetMostArticles from '@/pages/GetMostArticles.vue'
import Error from '@/pages/Error.vue'


const routes=[
   
    {name:'emailed',
    path:'/emailed',
    component: GetMostArticles,
   },
   {name:'viewed',
    path:'/viewed',
    component: GetMostArticles,
   },
   {name:'shared',
    path:'/shared',
    component: GetMostArticles,
    }, 
    {name:'Error',
    path: "/page-not-found",     
    component:Error 
    },
    {path: '/:pathMatch(.*)*',  
    redirect:{name:'Error'}
    },
];

// создаем объект маршрутизатора
const router = createRouter({
    // предоставляем реализацию истории посещений
    routes,
    history: createWebHistory(),
  });

export default router;