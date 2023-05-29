import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import store from '@/store'
import HomeView from '@/views/HomeView.vue'
import VerifyView from '@/views/CreateAccount'
import LoginView from '@/views/Login'
import LoginCodeView from '@/views/LoginCode'
import FAQView from '@/views/FAQ'
import UserIndexView from '@/views/user/UserIndex'
import UserTokenView from '@/views/user/Token'
import UserNftView from '@/views/user/NFT'
import UserTransactionView from '@/views/user/Transaction'
import UserPostView from '@/views/user/Post'
import UserPostDetailView from '@/views/post/PostDetail'
// other user's profile view
import AccountInfoView from '@/views/user/tempUser/AccountInfo'
// import AccountPostView from '@/views/user/tempUser/Post'
// import AccountTokenView from '@/views/user/tempUser/Token'
// import AccountNFTView from '@/views/user/tempUser/NFT'
// import AccountWalletView from '@/views/user/tempUser/WalletView'
import SearchView from '@/views/user/SearchView'

import WalletView from "@/views/user/WalletView";
import AboutUsView from "@/views/AboutView";
import PostsIndex from "@/views/post/PostsIndex";
import CreateCuration from "@/views/curations/CreateRecommend";
import CurationDetail from "@/views/curations/CurationDetail";
import CurationsView from "@/views/user/Curations";
import FaucetView from "@/views/Faucet"
import RewardView from "@/views/user/RewardView";
import UserGuide from '@/views/UserGuide';
import CreateView from "@/views/CreateView";
import WalletIndex from "@/views/user/WalletIndex";
import WordCloud from '@/views/word-cloud/Index'
import CommunityIndex from "@/views/community/CommunityIndex";
import CommunityDetail from "@/views/community/CommunityDetail";
import TopicDetail from "@/views/community/TopicDetail";
import InfluenceIndex from "@/views/Influence/InfluenceIndex";
import InfoIndex from "@/views/info/InfoIndex";
import QuoteTree from '@/views/Tree';

const routes = [
  {
    path: '/',
    redirect: '/square',
  },
  {
    path: '/square/:referee?',
    name: 'square',
    component: PostsIndex,
    meta: {keepAlive: true}
  },
  {
    path: '/create-curation',
    name: 'create-curation',
    component: CreateView,
    meta: {gotoHome: true}
  },
  {
    path: '/curation-detail/:id',
    name: 'curation-detail',
    component: CurationDetail
  },
  {
    path: '/logincode/:code?',
    name: 'login-code',
    component: LoginCodeView
  },
  {
    path: '/account-info/:user',
    name: 'account-info',
    component: AccountInfoView,
    meta: {header: 'hidden', tabbar: 'hidden'}
  },
  {
    path: '/search-user/:user',
    name: 'search-user',
    component: SearchView
  },
  {
    path: '/word-cloud',
    name: 'word-cloud',
    component: WordCloud
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
  },
  {
    path: '/userguide',
    name: 'user-guide',
    component: UserGuide
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView,
  },
  {
    path: '/faucet',
    name: 'faucet',
    component: FaucetView,
  },
  {
    path: '/wallet/:user',
    name: 'wallet',
    component: WalletIndex,
    meta: {gotoHome: true, header: 'hidden', tabbar: 'hidden'},
    children: [
      {
        path: '/wallet/:user/wallet',
        name: 'wallet',
        component: WalletView,
        meta: {gotoHome: true},
        children: [
          {
            path: '',
            name: 'nft',
            component: UserNftView
          },
          {
            path: 'token',
            name: 'token',
            component: UserTokenView
          },
        ]
      },
      {
        path: '/wallet/:user/reward',
        name: 'reward',
        component: RewardView,
        meta: {gotoHome: true}
      },
      {
        path: '/wallet/:user/transaction',
        name: 'transaction',
        component: UserTransactionView,
        meta: {gotoHome: true},
      },
    ]
  },
  {
    path: '/profile/:user',
    name: 'user',
    component: UserIndexView,
    meta: {gotoHome: true, header: 'hidden'},
    children: [
      {
        path: '/profile/:user/post',
        name: 'post',
        component: UserPostView,
        meta: {keepAlive: true, gotoHome: true}
      },
      {
        path: '/profile/:user/curations',
        name: 'profile-curations',
        component: CurationsView,
        meta: {keepAlive: true, gotoHome: true}
      }
    ]
  },
  {
    path: '/post-detail/:postId',
    name: 'post-detail',
    component: UserPostDetailView,
    meta: {header: "hidden", tabbar: "hidden"}
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityIndex,
    meta: {keepAlive: true}
  },
  {
    path: '/community-detail/:communityId',
    name: 'community-detail',
    component: CommunityDetail,
    meta: {header: 'hidden', keepAlive: true, tabbar: "hidden"}
  },
  {
    path: '/topic-detail/:topicId',
    name: 'topic-detail',
    component: TopicDetail,
    meta: {header: 'hidden'}
  },
  {
    path: '/influence',
    name: 'influence',
    component: InfluenceIndex,
    meta: {keepAlive: true, gotoHome: true}
  },
  {
    path: '/info',
    name: 'info',
    component: InfoIndex,
    meta: {header: 'hidden', tabbar: 'hidden', gotoHome: true}
  },
  {
    path: '/tree',
    name: 'quote-tree',
    component: QuoteTree,
    mata: {header: 'hidden', tabbar: 'hidden', keepAlive: true}
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.gotoHome && !store.getters['getAccountInfo']) {
    store.commit('saveShowLogin', true)
    next({
      path: '/'
    })
    return
  }
  if (to.name === 'community-detail') {
    if (to.params.communityId !== store.state.community?.showingCommunity?.communityId) {
      store.commit('community/clearData')
    }
  }
  next();
})

export default router
