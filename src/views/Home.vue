<template>
  <div id="home">
    <!-- 页面主要内容 -->
    <Sidebar />
    
    <!-- 顶部的两个头像logo -->
    <div class="avatar-logo-grid">
      <div class="avatar">
        <img src="../assets/team-people/yuxialuozi.png" alt="头像1" class="avatar-logo" />
      </div>
      <div class="avatar">
        <img src="../assets/team-people/yuxialuozi.png" alt="头像2" class="avatar-logo" />
      </div>
    </div>

    <div class="content">
      <h1 id="section1">这是什么</h1>
      <p>
        Hi， 这里是 yuxialuozi，如果你在平时遇到了这个昵称，那就是我了:>
        这里是我和我对象的小站，我们会在这里记录一些日常和我们平时的学习感悟 :>
      </p>
      <p>
        特别：本站是可交互性网站（好不容易申请下来的），如果你想的话，
        就在这里留下您的足迹吧。
      </p>

      <h1 id="section2">我们的介绍</h1>
      <p>
        yuxialuozi：一个开源开发工程师，什么语言都会一点，喜欢玩游戏，记录生活。
        柠栀：我的老婆，未来要成为 ufo（呸，ceo）的傲娇女。
      </p>
    </div>

    <!-- 右侧的目录导航栏 -->
    <div class="toc">
      <ul>
        <li><a href="#section1">这是什么</a></li>
        <li><a href="#section2">我们的介绍</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'HomePage',
  components: {
    Sidebar,
  },
  data() {
    return {
      showSearch: false,
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
</script>

<style scoped>
/* 搜索图标样式 */
.search-icon {
  position: fixed;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
}

/* 修改后的内容布局 */
.content {
  margin-left: 250px; /* 将内容向右移动，增加与侧边栏的距离 */
  padding: 20px;
  padding-top: 70px;
  max-width: 900px; /* 限制内容区的最大宽度 */
  text-align: center;
  margin-right: auto; /* 让内容居中 */
}

h1 {
  font-size: 28px;
  color: #333333;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.8;
  color: #555555;
  max-width: 800px;
  margin: 20px auto;
}

/* 顶部头像样式 */
.avatar-logo-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; /* 头像和内容之间的间距 */
}

.avatar {
  margin: 0 15px; /* 两个头像之间的距离 */
}

.avatar-logo {
  width: 80px; /* 头像大小 */
  height: 80px;
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover;
}

/* 右侧目录样式 */
.toc {
  position: fixed;
  top: 100px; /* 稍微下移，避免遮挡搜索图标 */
  right: 20px;
  width: 200px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.toc ul {
  list-style: none;
  padding: 0;
}

.toc li {
  margin-bottom: 10px;
}

.toc a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.toc a:hover {
  color: #007bff;
}
</style>
