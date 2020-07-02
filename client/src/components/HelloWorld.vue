<template>
  <div class="hello">
      <Search class="search"/>
      <Source @visible="change" />
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
  </div>
</template>

<script>
import Search from './Search'
import Source from './Source'
export default {
  name: 'HelloWorld',
  components: {
    Search,
    Source
  },
  data(){
    return {
      visible: false,
      keyword: null,
      name: '',
      ip: ''
    }
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
      let source = JSON.parse(localStorage.getItem('all-source'))
      console.log(source[this.keyword])
      let arr = [{"href": this.ip,"value": this.name}]
      source[this.keyword].unshift(...arr)
      console.log(source.get_document)
      console.log(source)
    },
    cancel(){
      this.close()
    },
    getKey(e){
      this.key = e.key
      console.log(this.key)
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: -300px;
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    .edit{
      position: absolute;
      top: 0;
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
}
</style>
