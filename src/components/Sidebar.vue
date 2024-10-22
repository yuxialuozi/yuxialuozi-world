<template>
  <div class="sidebar">
    <!-- 导航菜单 -->
    <ul class="nav-menu">
      <li><a href="/"><font-awesome-icon :icon="['fas', 'home']" /> 主页</a></li>
      <li><a href="/project"><font-awesome-icon :icon="['fas', 'project-diagram']" /> 项目</a></li>
      <li><a href="/information"><font-awesome-icon :icon="['fas', 'file-alt']" /> 博客</a></li>
      <li><a href="/contact"><font-awesome-icon :icon="['fas', 'phone-alt']" /> 联系我</a></li>
    </ul>

    <!-- 运行时间和备案信息 -->
    <div class="footer">
      <p>你知道吗？本站已经运行了 {{ runningTime }} 天</p>

      <!-- 备案信息 -->
      <div class="icp-info">
        <a href="https://beian.miit.gov.cn" target="_blank">湘ICP备2023033213号-1</a>
        <!-- 公安徽标和备案号 -->
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43010402000521" target="_blank" class="police-info">
          湘公网安备 43010402000521号
        </a>
      </div>

      <!-- 添加的版权所有信息 -->
  <p class="copyright">
    © 2024 yuxialuozi 版权所有
  </p>

    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faProjectDiagram, faFileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faProjectDiagram, faFileAlt, faPhoneAlt);

export default {
  name: 'WebSidebar',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      runningTime: 0,
      siteStartDate: new Date('2023-01-01'), // 将此日期替换为你的站点上线日期
    };
  },
  mounted() {
    this.calculateRunningTime();
  },
  methods: {
    calculateRunningTime() {
      const now = new Date();
      const differenceInTime = now - this.siteStartDate;
      const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
      this.runningTime = differenceInDays;
    },
  },
};
</script>

<style scoped>
/* 侧边栏样式 */
.sidebar {
  width: 200px;
  background-color: #ffffff;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
}

.footer .copyright {
  margin-top: 10px;
  font-size: 10px;
  color: #888888;
  text-align: center;
}


/* 导航菜单样式 */
.nav-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 12px 20px;
  text-align: left;
}

a {
  color: #333333;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

i {
  margin-right: 10px;
}

a:hover {
  background-color: #f7f7f7;
  padding-left: 10px;
  color: #000000;
}

/* 备案信息和运行时间样式 */
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
  gap: 5px; /* 增加备案信息和徽标之间的间距 */
}

.police-info img {
  width: 16px; /* 设置公安徽标的大小 */
  height: 16px;
  margin-right: 5px;
}

.footer a {
  color: #888888;
  text-decoration: none;
  font-size: 10px;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
