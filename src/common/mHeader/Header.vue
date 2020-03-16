<template>
  <div id="m-header">
    <div class="header-wrap" :style="{ height: isPc ? '90px' : '60px' }">
      <div
        class="header-log"
        :style="{ 'justify-content': isPc ? 'space-between' : 'center' }"
      >
        <div class="line" v-if="isPc"></div>
        <div class="blog-name">{{ userName || "博客" }}</div>
        <div class="line" v-if="isPc"></div>
      </div>
      <header-tab-bar :tabs="tabs" v-if="isPc" @tab-click="selectTab" />
      <div class="toggle" v-if="!isPc" @click="toggle">
        <span
          class="toggle-line"
          v-for="(line, index) in toggleLineData"
          :key="index"
          :style="{
            width: line.width,
            top: line.top,
            transform: line.transform,
            opacity: line.opacity,
            transition: 'all .3s'
          }"
        >
        </span>
      </div>
    </div>
    <el-collapse-transition>
      <div class="mobile-tab-wrap" v-show="!isPc && showMobileTabs">
        <div
          class="tab"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(tab)"
        >
          <i class="iconfont" :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import headerTabBar from "../../common/headerTabBar/index";
export default {
  components: {
    headerTabBar
  },
  data() {
    return {
      userName: "Ming.",
      isPc: true,
      toggleLineData: [],
      showMobileTabs: false,
      tabs: [
        {
          name: "首页",
          icon: "icon-home2",
          to: "home"
        },
        {
          name: "分类",
          icon: "icon-biaoqian-",
          to: "categories"
        },
        {
          name: "归档",
          icon: "icon-guidang",
          to: "archives"
        },
        {
          name: "关于",
          icon: "icon-iconset0142",
          to: "about"
        },
        {
          name: "友链",
          icon: "icon-lianjie",
          to: "friends"
        },
        {
          name: "更多",
          icon: "icon-gengduo",
          to: "morefunc"
        },
        {
          name: "搜索",
          icon: "icon-sousuo",
          to: "search"
        },
         {
          name: "聊天室",
          icon: "icon-sousuo",
          to: "chart_login"
        },
      ],
      lineStyle: {
        normalLineData: [
          {
            width: "100%",
            top: "0px",
            transform: "rotateZ(0deg)",
            opacity: "1"
          },
          {
            width: "100%",
            top: "0px",
            transform: "rotateZ(0deg)",
            opacity: "1"
          },
          {
            width: "100%",
            top: "0px",
            transform: "rotateZ(0deg)",
            opacity: "1"
          }
        ],
        closeLineData: [
          {
            width: "100%",
            top: "6px",
            transform: "rotateZ(-45deg)",
            opacity: "1"
          },
          {
            width: "100%",
            top: "0px",
            transform: "rotateZ(0deg)",
            opacity: "0"
          },
          {
            width: "100%",
            top: "-6px",
            transform: "rotateZ(45deg)",
            opacity: "1"
          }
        ]
      },

      screenWidth: document.documentElement.clientWidth
    };
  },
  created() {
    this.toggleLineData = this.lineStyle.normalLineData;
  },
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  },
  computed: {
    // ...mapGetters(["screen", "blogInfo"])
  },
  watch: {
    screenWidth: {
      handler: function(value) {
        this.isPc = true;
        if (value <= 768) {
          this.isPc = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    selectTab(tab) {
      if (tab.to === "morefunc") {
        this.$toast("更多功能待开发...");
        return;
      }
      this.toggle();
    
      this.$router.push({ name: tab.to });
    },
    toggle() {
      this.showMobileTabs = !this.showMobileTabs;
      this.toggleLineData = this.showMobileTabs
        ? this.lineStyle.closeLineData
        : this.lineStyle.normalLineData;
    }
  }
};
</script>

<style lang="stylus" scoped>
*
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

#m-header
  position: relative
  width: 100%
  background-color: #f9f9f9
  .header-wrap
    position: relative
    max-width: 1000px
    padding: 0 10px
    margin: 0 auto
    height: 90px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    transition: height .3s
    .header-log
        height: 90px
        width 60px
        display: flex
        flex-direction: column
        align-items: center
        font-size: 20px
        font-weight: bold
        box-sizing border-box
        padding 20px 0
        &:hover
            cursor pointer
            .line
                width 0px
        .line
            width:90px
            display :inline-block
            height:2px
            background-color:black
            transition: width .3s

  .toggle
      width: 24px
      height: 24px
      background-color: #f9f9f9
      padding: 5px
      cursor: pointer
      line-height: 0
      .toggle-line
        position: relative
        display: inline-block
        vertical-align: top
        width: 100%
        height: 2px
        margin-top: 4px
        background-color: black
        &:first-child
          margin-top: 0px
   .mobile-tab-wrap
    width: 100%
    transition: all .3s
    // overflow: hidden
    border-top: 1px solid #eeeeee
    .tab
      position: relative
      width: 100%
      padding: 8px 15px
      font-size: 12px
      line-height: 1
      .iconfont
        font-size: 12px
        margin-right: 5px

@keyframes logo-name {
  from {
    margin-left: -60px;
    opacity: 0
  }
  to {
    margin-left: 0px;
    opacity: 1
  }
}
@keyframes logo-line {
  from {
    width: 0px;
  }
  to {
    width: 70px;
  }
}
</style>
