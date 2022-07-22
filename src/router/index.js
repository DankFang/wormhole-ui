import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VerifyView from '@/views/Verify'
import LoginView from '@/views/Login'
import FAQView from '@/views/FAQ'
import UserIndexView from '@/views/user/UserIndex'
import UserTokenView from '@/views/user/Token'
import UserNftView from '@/views/user/NFT'
import UserTransactionView from '@/views/user/Transaction'
import UserPostView from '@/views/user/Post'
import UserPostDetailView from '@/views/post/PostDetail'
import AccountInfoView from '@/views/AccountInfo'
import SquareIndex from "@/views/square/SquareIndex";
import TagView from "@/views/square/TagView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/square',
    name: 'square',
    component: SquareIndex,
  },
  {
    path: '/square/tag/:tag',
    name: 'tag',
    component: TagView,
  },
  {
    path: '/verify',
    name: 'verify',
    component: VerifyView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/account-info/:user',
    name: 'account-info',
    component: AccountInfoView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
  },
  {
    path: '/profile/:user',
    name: 'user',
    component: UserIndexView,
    children: [
      {
        path: '/profile/:user',
        name: 'token',
        component: UserTokenView
      },
      {
        path: '/profile/:user/nft',
        name: 'nft',
        component: UserNftView
      },
      {
        path: '/profile/:user/transaction',
        name: 'transaction',
        component: UserTransactionView
      },
      {
        path: '/profile/:user/post',
        name: 'post',
        component: UserPostView
      }
    ]
  },
  {
    path: '/post-detail',
    name: 'post-detail',
    component: UserPostDetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Vue.defineAsyncComponent(() => import('../views/AboutView.vue')),
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})

export default router
