<template>
  <div :class="['sidebar', { 'collapsed': isCollapsed }]">
    <!-- 导航菜单 -->
    <transition name="fade" mode="out-in">
      <ul v-if="!isCollapsed" class="nav-menu">
        <li>
          <a href="/" class="nav-button">
            <Icon icon="material-symbols:home" />
            主页
          </a>
        </li>
        <li>
          <a href="/mylife" class="nav-button">
            <Icon icon="whh:oneupalt" />
            我的生活
          </a>
        </li>
        <li>
          <a href="/myarticles" class="nav-button">
            <Icon icon="material-symbols:article" />
            我的文章
          </a>
        </li>
        <li>
          <a href="/friends" class="nav-button">
            <Icon icon="material-symbols:link-rounded" />
            友链
          </a>
        </li>
        <li>
          <a href="/contact" class="nav-button">
            <Icon icon="codicon:link-external" />
            联系我
          </a>
        </li>
      </ul>
    </transition>

    <!-- 收缩按钮 -->
    <button class="toggle-button" @click="toggleSidebar">
      <Icon :icon="isCollapsed ? 'icon-park-outline:right' : 'icon-park-outline:left'" />
    </button>

    <!-- 运行时间和备案信息 -->
    <transition name="fade" mode="out-in">
      <div class="footer" v-if="!isCollapsed">
        <p>本站从2024年10月31到现在已经运行了 {{ runningTime }} 天</p>
        <p>今天是 {{ currentDate }}，{{ festival }} </p>
        <p>旅行者一号已经距离地球约 {{ voyagerDistance }} 公里</p>
        <div class="icp-info">
          <a href="https://beian.miit.gov.cn" target="_blank">湘ICP备2023033213号-1</a>
        </div>
        <div class="icp-info">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43010402000521" target="_blank" class="police-info">
            湘公网安备 43010402000521号
          </a>
        </div>
        <p class="copyright">© 2024 yuxialuozi 版权所有</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'WebSidebar',
  components: {
    Icon,
  },
  data() {
    return {
      runningTime: 0,
      siteStartDate: new Date('2024-10-31'),
      isCollapsed: true, // 默认关闭
      currentDate: '',
      festival: '',
      voyagerDistance: 0,
    };
  },
  mounted() {
    this.calculateRunningTime();
    this.getCurrentDate();
    this.calculateVoyagerDistance();
  },
  methods: {
    calculateRunningTime() {
      const now = new Date();
      const differenceInTime = now - this.siteStartDate;
      const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
      this.runningTime = differenceInDays;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    getCurrentDate() {
      const now = new Date();
      this.currentDate = new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      }).format(now);

      const holidays = {
        '1-1': '元旦',
        '10-1': '国庆节',
        '10-31': '万圣节',
        '12-25': '圣诞节',
      };
      const monthDay = `${now.getMonth() + 1}-${now.getDate()}`;
      this.festival = holidays[monthDay] || '今天没有特别的节日';
    },
    calculateVoyagerDistance() {
      const launchDate = new Date('1977-09-05');
      const now = new Date();
      const secondsSinceLaunch = (now - launchDate) / 1000;
      const voyagerSpeedKmPerSecond = 17;
      this.voyagerDistance = Math.floor(secondsSinceLaunch * voyagerSpeedKmPerSecond).toLocaleString();
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px; /* 默认宽度 */
  background-color: #ffffff;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  transition: transform 0.3s; /* 使用 transform 进行横向动画 */
  transform: translateX(0); /* 默认位置 */
}

.sidebar.collapsed {
  transform: translateX(-100%); /* 收缩时移动到左侧 */
}

/* 收缩按钮 */
.toggle-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%);
  right: -35px; /* 将按钮放置在侧边栏外 */
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.toggle-button:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.nav-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 20px;
  margin: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s;
}

.nav-button:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.footer {
  text-align: center;
  padding: 10px;
  font-size: 10px;
  color: #888888;
}

.icp-info {
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.footer a {
  color: #888888;
  text-decoration: none;
  font-size: 10px;
}

.footer a:hover {
  text-decoration: underline;
}

.footer .copyright {
  margin-top: 10px;
  font-size: 10px;
  color: #888888;
  text-align: center;
}

/* 动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
