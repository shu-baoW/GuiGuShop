import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
export default [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isFooterHide:true,
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isFooterHide:true,
        }
    },
    {
        path:'/search',
        component:Search,
    },
]