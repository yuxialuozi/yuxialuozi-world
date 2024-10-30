<template>
  <div id="home">
    <div class="content">
      <h1 id="section1">这是什么</h1>
      <p>
        Hi,这里是 yuxialuozi，如果你在平时遇到了这个昵称，那就是我了:>
        <br>
        这里是我和我对象的小站，我们会在这里记录一些日常和我们平时的学习感悟 :>
      </p>
      <p>
        特别：本站是可交互性网站（好不容易申请下来的），如果你想的话，就在这里留下您的足迹吧。
      </p>

      <h1 id="section2">我们的介绍</h1>
      <p>
        yuxialuozi：一个开源开发工程师，什么语言都会一点，喜欢玩游戏，记录生活。
        <br />
        柠栀：我的老婆，未来要成为 ufo（呸，ceo）的傲娇女。
      </p>

      <h1 id="section3">公告</h1>
      <p>
       本网站现在正在开发中，敬请期待后续功能：
       <br>
       侧边栏优化，我的生活页面，我的文章页面，友链页面，联系我页面，接入后端服务器，增加互动评论区...

      </p>
      
    </div>

    <!-- 右侧的目录导航栏 -->
    <div class="toc">
      <ul>
        <li><a href="#section1">这是什么</a></li>
        <li><a href="#section2">我们的介绍</a></li>
        <li><a href="#section3">公告</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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
  margin-left: 300px; /* 向右偏移，留出侧边栏空间 */
  padding: 20px;
  padding-top: 70px;
  max-width: calc(100% - 220px); /* 限制内容区的最大宽度，使其靠近右侧导航栏 */
  text-align: left; /* 左对齐，方便阅读 */
  transition: margin-left 0.3s ease; /* 添加过渡效果 */
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
  margin: 20px auto; /* 增加段落间距 */
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
  padding: 15px; /* 增加内边距 */
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
  display: block; /* 改为块级元素，方便点击 */
  padding: 5px 10px; /* 增加内边距 */
  transition: background-color 0.3s;
}

.toc a:hover {
  background-color: #e0e0e0; /* 增加悬停背景色 */
  color: #007bff;
}
</style>
