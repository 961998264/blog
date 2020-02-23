<template>
  <div id="m-header">
    <div class="header-wrap" :style="{ height: isPc ? '90px' : '60px' }">
      <div class="header-log" :style="{'justify-content':isPc?'space-between':'center'}">
        <div class="line" v-if="isPc"></div>
        <div class="blog-name">{{ userName || "博客" }}</div>
        <div class="line" v-if="isPc"></div>
      </div>
      <header-tab-bar />
    </div>
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
      screenWidth:document.documentElement.clientWidth
    };
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
    screenWidth(value) {
      this.isPc = true;
      if (value <= 768) {
        this.isPc = false;
      }
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
</style>
