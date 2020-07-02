<template>
  <div id="app">
          <div class="content">
            <component :is="whichOne"></component>
          </div>
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
  height: 100vh;
  background-image: url(./assets/background.jpg);
  background-size: cover;
  border-top: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .search{
    margin-top: 50px;
  }
}
</style>
