import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage"
import CriptoLists from "@/pages/CriptoLists"
import NewsPage from "@/pages/NewsPage"
import CryptoDetail from "@/pages/CryptoDetail"
const routes = [
    {
        name: 'home',
        path:"/",
        component: HomePage
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
    },
    {
        name:'cryptodetail',
        path:'/cryptodetail/:id',
        component:CryptoDetail
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;