<template>
  <div class="sourceWrapper">
    <a-tabs :key="activeKey">
      <a-tab-pane v-for="vo in itemList" :key="vo.source">
        <span slot="tab">
          <a-icon type="android" />{{vo.label}}
        </span>
        <div class="wrapper">
          <ul>
            <li @click="changeVisible" data-remind="document">
              <a-icon type="plus-circle" />
            </li>
            <a
              v-for="(item,index) in list[vo.source]"
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
import X from '../Data/source'
export default {
  data() {
    return {
      activeKey: 'document',
      list: X,
      itemList: [
        {
          label: '技术文档',
          source: 'document'
        },
        {
          label: '技术博客',
          source: 'blog'
        },
        {
          label: '设计',
          source: 'design'
        },
        {
          label: '视频学习',
          source: 'vedio'
        },
        {
          label: '娱乐',
          source: 'entertainment'
        },
      ],
    }
  },
  methods: {
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
.sourceWrapper {
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