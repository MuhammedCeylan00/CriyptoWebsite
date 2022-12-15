import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage"
import CryptoDetail from "@/pages/CryptoDetail"
import InfoDetail from "@/pages/InfoDetail"
import CriptoLists from "@/pages/CriptoLists"
const routes = [
    {
        name: 'list',
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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;