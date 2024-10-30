import { createRouter, createWebHistory } from 'vue-router';

// 按需加载视图组件
const Home = () => import('../views/Home.vue');
const MyLife = () => import('../views/MyLife.vue');
const MyArticles = () => import('../views/MyArticles.vue');
const FriendsLinks = () => import('../views/FriendsLinks.vue');
const Contact = () => import('../views/Contact.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // 主页
  },
  {
    path: '/mylife',
    name: 'MyLife',
    component: MyLife, // 我的生活页面
  },
  {
    path: '/myarticles',
    name: 'MyArticles',
    component: MyArticles, // 我的文章页面
  },
  {
    path: '/friends',
    name: 'FriendsLinks',
    component: FriendsLinks, // 友链页面
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact, // 联系我页面
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound, // 404页面
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用HTML5历史模式
  routes,
});

export default router;
