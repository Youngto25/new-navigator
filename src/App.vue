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
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
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
        how are you???
      </a-layout-header>
      <a-layout-content :style="{ background: '#fff', minHeight: '280px' }">
        <div class="content">
          <Search class="search"/>
          <Source @visible="change" />
        </div>
      </a-layout-content>
      <div class="mask" :style="{display: `${visible ? 'block' : 'none'}`}">
        <div class="edit">
          <div class="title"><span>请编辑需要加入的网站</span></div>
          <div class="format">名称：<input type="text" v-model="name"></div>
          <div class="format">网址：<input type="text" v-model="ip"></div>
          <div class="buttons">
            <a-button @click="confirm">确认</a-button>
            <a-button @click="cancel">取消</a-button>
          </div>
        </div>
      </div>
    </a-layout>
  </a-layout>
  
  </div>
</template>

<script>
import Search from './components/Search'
import Source from './components/Source'
export default {
  name: 'app',
  data(){
    return {
      collapsed: false,
      visible: false,
      keyword: null,
      name: '',
      ip: ''
    }
  },
  components: {
    Search,
    Source
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
    change(e){
      this.keyword = e
      this.visible = true
    },
    close(){
      this.visible = false
    },
    confirm(){
      this.close()
      console.log(this.name,this.ip)
    },
    cancel(){
      this.close()
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
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search{
    margin-top: 50px;
  }
}

.content-wrapper{
  position: relative;
}

.mask{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    .edit{
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 200px;
      width: 400px;
      background: #ffffff;
      border-radius: 16px;
      .title{
        margin: 16px;
        font-size: 16px;
        font-weight: 500;
      }
      .format{
        margin: 20px 0 10px 16px;
        input{
          border: 1px solid #cccccc;
          border-radius: 4px;
          width: 320px;
          height: 32px;
          padding-left: 8px;
        }
      }
      .buttons{
        display: flex;
        justify-content: flex-end;
        margin-right: 22px;
        button{
          margin-left: 8px;
          &:first-child{
            background: #1890FF;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
