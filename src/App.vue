<template>
  <div id="appindex">
    <!-- 博客页面 -->
    <div class="content-wrap">
      <!-- header -->
      <my-header style="z-index:5" />
      <!-- header 结束 -->
      <!-- content -->
      <div class="view-wrap">
        <router-view></router-view>
      </div>
      <!-- content 结束 -->
      <!-- footer -->
      <my-footer />
      <!-- footer 结束 -->
    </div>
    <right-nav />
    <!-- 博客页面 结束 -->

    <!-- 返回顶部 -->
    <transition name="slide-fade">
      <div class="to-top" @click="scrollToTarget(0)" v-show="showScrollToTop">
        <span class="to-top-line" v-for="(line, index) in lineData" :key="index" :style="{
            height: line.height,
            left: line.left,
            transform: line.transform
          }">
        </span>
      </div>
    </transition>
    <!-- 返回顶部 结束 -->
  </div>
</template>
<script>
import myHeader from "COMMON/mHeader/Header";
import myFooter from "./common/mFooter/Footer";
import rightNav from "./common/rightNav/RightNav";

export default {
  name: "app",
  components: {
    myHeader,
    myFooter,
    rightNav
  },
  data () {
    return {
      showScrollToTop: false,
      lineData: [
        {
          height: '50%',
          left: '3px',
          transform: 'rotateZ(45deg)'
        },
        {
          height: '100%',
          top: '0px',
          transform: 'rotateZ(0deg)'
        },
        {
          height: '50%',
          left: '-3px',
          transform: 'rotateZ(-45deg)'
        }
      ],
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestory () {

  },
  methods: {
    scrollListener () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      if (scrollTop >= 60) {
        this.showScrollToTop = true
      } else {
        this.showScrollToTop = false
      }
    }
  }
};
</script>

<style lang="stylus" src="STYLUS/main.styl"></style>
<style lang="stylus">
.slide-top-enter-active {
  transition: all 0.5s ease-out;
}

.slide-top-leave-active {
  transition: all 0.1 ease;
}

.slide-top-enter, .slide-top-leave-active {
  transform: translateY(-450px);
  opacity: 0;
}

#appindex {
  width: 100%;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  position: absolute;

  .admin-wrap {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;

    .view-wrap {
      flex: 1;
      min-width: 311px;
      height: calc(100vh);
    }
  }

  .content-wrap {
    flex: 1;
    position: relative;

    .view-wrap {
      min-width: 320px;
      margin: 0 auto;
      padding: 0 10px;
      min-height: calc(100vh - 120px);
      transition: width 0.3s;
    }
  }

  .to-top {
    position: fixed;
    width: 24px;
    height: 24px;
    background-color: $color-main;
    right: 10px;
    bottom: 15px;
    padding: 5px;
    z-index: 1050;
    cursor: pointer;
    line-height: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .to-top-line {
      position: relative;
      width: 2px;
      height: 100%;
      margin-left: 4px;
      background-color: $color-white;

      &:first-child {
        margin-left: 0px;
      }
    }
  }
}
</style>

<style lang="stylus" >
.iconfont {
  width: 14px !important;
  height: 14px !important;
}
</style>