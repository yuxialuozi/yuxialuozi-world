<template>
  <div id="app">
    <!-- 侧边栏将始终显示 -->
    <Sidebar /> 

    <!-- 搜索图标在右上角 -->
    <div class="search-icon" @click="toggleSearch">
      <i class="fas fa-search"></i>
    </div>

    <!-- 全局搜索框 -->
    <div v-if="showSearch" class="global-search">
      <input type="text" placeholder="搜索..." />
      <button @click="toggleSearch">关闭</button>
    </div>

    <!-- 动态渲染路由内容 -->
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      showSearch: false
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    }
  }
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

.search-icon i {
  color: #333;
}

/* 全局搜索框样式 */
.global-search {
  position: fixed;
  top: 10px;
  right: 50px;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 20px;
  z-index: 1000;
}

.global-search input {
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #ffffff;
}

.global-search button {
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0 10px;
}

#app {
  display: flex;
}

/* 路由内容区样式保持不变 */
.router-view {
  flex-grow: 1;
  padding: 20px;
  background-color: #F7F7F7;
  min-height: 100vh;
}
</style>
