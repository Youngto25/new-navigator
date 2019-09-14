<template>
  <div class="xxx">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="android" />
          技术文档
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible" data-remind="document"><a-icon type="plus-circle" /></li>
            <li v-for="(item,index) in list.document" :key="index" @click="x" :data-src="item.href">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <a-icon type="android" />
          技术博客
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible"><a-icon type="plus-circle" /></li>
            <li v-for="(item,index) in list.blog" :key="index" @click="x" :data-src="item.href">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="4">
        <span slot="tab">
          <a-icon type="android" />
          设计
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible"><a-icon type="plus-circle" /></li>
            <li v-for="(item,index) in list.design" :key="index" @click="x" :data-src="item.href">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="5">
        <span slot="tab">
          <a-icon type="android" />
          视频学习
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible"><a-icon type="plus-circle" /></li>
            <li v-for="(item,index) in list.vedio" :key="index" @click="x" :data-src="item.href">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="android" />
          娱乐
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible"><a-icon type="plus-circle" /></li>
            <li v-for="(item,index) in list.entertainment" :key="index" @click="x" :data-src="item.href">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </a-tab-pane>
    </a-tabs>
    
  </div>
</template>
<script>
import X from '../Data/x.json'
export default {
  data(){
    return{
      list: null
    }
  },
  beforeMount(){
    // localStorage.setItem('navInfo',X)
    // console.log(localStorage.getItem('navInfo'))   
    if(localStorage.getItem('all-source')){
      console.log(1)
      this.list = JSON.parse(localStorage.getItem('all-source'))
      console.log(this.list)
    }else{
      console.log(2)
      localStorage.setItem('all-source',JSON.stringify(X))
    }
  },
  mounted(){
    //this.list = X
  },
  methods: {
    x(e){
      let src = e.target.getAttribute('data-src')
      window.open(src)
    },
    changeVisible(e){
      let keyword = e.target.getAttribute('data-remind')
      this.$emit('visible',keyword)
    }
    
  }
}
</script>
<style lang="scss" scoped>

.xxx{
  position: relative;
  width: 662px;
  height: 400px;
  overflow-y: auto;
  margin: 0 auto;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 30px;
  .wrapper{
    ul{
      margin: 0 auto;
      width: 640px;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 120px;
        height: 36px;
        background: #f5f6f1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover{
          background: #dcdde1;
        }
      }
    }
  }
  
  /deep/.ant-tabs-nav-scroll{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>