<template>
  <div class="xxx">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="android" />技术文档
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible" data-remind="document">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list.document"
              :key="index"
              :href="item.href"
              target="_blank"
            >{{ item.value }}</a>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <a-icon type="android" />技术博客
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list.blog"
              :key="index"
              :href="item.href"
              target="_blank"
            >{{ item.value }}</a>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="4">
        <span slot="tab">
          <a-icon type="android" />设计
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list.design"
              :key="index"
              :href="item.href"
              target="_blank"
            >{{ item.value }}</a>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="5">
        <span slot="tab">
          <a-icon type="android" />视频学习
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list.vedio"
              :key="index"
              :href="item.href"
              target="_blank"
            >{{ item.value }}</a>
          </ul>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="android" />娱乐
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list.entertainment"
              :key="index"
              :href="item.href"
              target="_blank"
            >{{ item.value }}</a>
          </ul>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import X from '../Data/x.json'
export default {
  data() {
    return {
      list: null
    }
  },
  beforeMount() {
    // localStorage.setItem('navInfo',X)
    // console.log(localStorage.getItem('navInfo'))
    if (localStorage.getItem('all-source')) {
      this.list = JSON.parse(localStorage.getItem('all-source'))
    } else {
      localStorage.setItem('all-source', JSON.stringify(X))
    }
  },
  mounted() {
    //this.list = X
  },
  methods: {
    x(e) {
      let src = e.target.getAttribute('data-src')
      window.open(src)
    },
    changeVisible(e) {
      let keyword = e.target.getAttribute('data-remind')
      this.$emit('visible', keyword)
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.xxx {
  position: relative;
  width: 662px;
  height: 400px;
  overflow-y: auto;
  margin: 0 auto;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 30px;
  .wrapper {
    ul {
      margin: 0 auto;
      width: 640px;
      display: flex;
      flex-wrap: wrap;
      li,
      a {
        width: 120px;
        height: 36px;
        background: rgba(245, 246, 241, 0.7);
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s;
        color: rgba(0, 0, 0, 0.65);
        &:hover {
          background: #ffffff;
        }
      }
    }
  }

  /deep/.ant-tabs-nav-scroll {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/.ant-tabs-tab {
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
  }
}
</style>