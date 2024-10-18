import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 正确的 Vuetify 3 导入方式
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify 样式

import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import 'roboto-fontface/css/roboto/roboto-fontface.css'; // Roboto 字体
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome 图标

// 初始化 Vuetify 实例
const vuetify = createVuetify();

const app = createApp(App);

// 使用 Vuetify 插件
app.use(vuetify);
app.use(router);

app.mount('#app');
