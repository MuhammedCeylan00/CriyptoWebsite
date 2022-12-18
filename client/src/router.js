import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage"
import CryptoDetail from "@/pages/CryptoDetail"
import InfoDetail from "@/pages/InfoDetail"
import CriptoLists from "@/pages/CriptoLists"
import NewsPage from "@/pages/NewsPage"
const routes = [
    {
        name: 'home',
        path:"/",
        component: HomePage
    },
    {
        name: 'detail',
        path:"/crypto-detail/:id",
        params: true,
        component: CryptoDetail
    },
    {
        name:'cryptodetail',
        path:"/infodetail",
        component:InfoDetail
    },
    {
        name:'criptos',
        path:"/criptos",
        component:CriptoLists
    },
    {
        name:'news',
        path:'/news',
        component:NewsPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;