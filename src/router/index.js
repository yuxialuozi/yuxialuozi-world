import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/contact.vue';
import Information from '../views/information.vue'; // 确保文件路径和名称完全匹配
import Project from '../views/project.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // 主页
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact, // 联系我们页面
  },
  {
    path: '/information',
    name: 'Information',
    component: Information, // 信息页面
  },
  {
    path: '/project',
    name: 'Project',
    component: Project, // 项目页面
  }
];

const router = createRouter({
  history: createWebHistory(), // 省略 process.env.BASE_URL，确保路径正常工作
  routes,
});

export default router;
