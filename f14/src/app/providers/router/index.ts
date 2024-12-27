import { createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/views/Main/ui/MainPage.vue'
import Authorization from '@/views/Authorization/ui/Auth.vue'
import Registration from '@/views/Registration/ui/Reg.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/auth',
            name: 'auth',
            component: Authorization
        },
        {
            path: '/reg',
            name: 'reg',
            component: Registration
        }
    ]
})

export default router