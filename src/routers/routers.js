import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'


Vue.use(Router)

export default new Router(
    {
        routes:{
            name:'Index',
            path:'/',
            component:Index
        }
    }
)