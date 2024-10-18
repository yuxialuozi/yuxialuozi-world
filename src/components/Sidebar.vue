<template>
    <div class="sidebar">
     
  
      <!-- 导航菜单 -->
      <ul class="nav-menu">
        <li><a href="/"><i class="fas fa-home"></i> 主页</a></li>
        <li><a href="/project"><i class="fas fa-project-diagram"></i> 项目</a></li>
        <li><a href="/information"><i class="fas fa-file-alt"></i> 博客</a></li>
        <li><a href="/contact"><i class="fas fa-phone-alt"></i> 联系我</a></li>
      </ul>
  
      <!-- 备案信息 -->
      <div class="footer">
        <p>备案信息：湘A123456</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WebSidebar'
  };
  </script>
  
  <style scoped>
  /* 侧边栏样式 */
  .sidebar {
    width: 200px;
    background-color: #FFFFFF; /* 白色背景 */
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05); /* 轻微阴影 */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 搜索框和菜单在顶部，备案信息在底部 */
    padding-top: 20px;
  }
  
  /* 导航菜单样式 */
  .nav-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 12px 20px; /* 减少上下填充距离 */
    text-align: left;
  }
  
  a {
    color: #333333; /* 深灰色字体 */
    text-decoration: none;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    display: block;
    transition: all 0.3s ease;
  }
  
  i {
    margin-right: 10px; /* 图标与文本的间距 */
  }
  
  /* 悬停效果 */
  a:hover {
    background-color: #F7F7F7; /* 轻微的背景颜色变化 */
    padding-left: 10px;
  }
  
  /* 备案信息样式 */
  .footer {
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #888888; /* 浅灰色字体 */
  }
  </style>
  