<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="getKey">
          <a-icon type="user" />
          <span>网页导航</span>
        </a-menu-item>
        <a-menu-item key="2" @click="getKey">
          <a-icon type="upload" />
          <span>收藏文章</span>
        </a-menu-item>
        <a-menu-item key="3" @click="getKey">
          <a-icon type="video-camera" />
          <span>工作日志</span>
        </a-menu-item>
        <a-menu-item key="4" @click="getKey">
          <a-icon type="upload" />
          <span>留言板</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="content-wrapper">
      
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <span style="fontSize: 16px">how are you???</span>
      </a-layout-header>
      <a-layout-content :style="{ background: '#fff', minHeight: '280px' }">
        <div class="content">
          <component :is="whichOne"></component>
          <!-- <Search class="search"/>
          <Source @visible="change" /> -->
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Collect from './components/Collect'
import Worklog from './components/Worklog'
import Message from './components/Message'
export default {
  name: 'app',
  data(){
    return {
      collapsed: false,
      key: 1,
      whichOne: 'HelloWorld'
    }
  },
  components: {
    HelloWorld,
    Collect,
    Worklog,
    Message
  },
  beforeMount(){
    // this.$http('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    // .then((res)=>{
    //   console.log(res)
    // })
  },
  mounted(){
  },
  methods: {
    getKey(e){
      this.key = e.key
      this.setComponent()
    },
    setComponent(){
      console.log('触发')
      let key = parseInt(this.key)
      if(key === 1){
        this.whichOne = 'HelloWorld'
      }else if(key === 2){
        this.whichOne = 'Collect'
      }else if(key === 3){
        this.whichOne = 'Worklog'
      }else if(key === 4){
        this.whichOne = 'Message'
      }
      console.log(this.whichOne)
    }
  }
}
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}

.content{
  height: calc(100vh - 64px);
  background-image: url(./assets/background.jpg);
  background-size: cover;
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search{
    margin-top: 50px;
  }
}
</style>
