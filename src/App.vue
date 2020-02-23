<template>
  <div id="appindex">
        <!-- 博客页面 -->
    <div class="content-wrap" >
      <!-- header -->
      <my-header />
      <!-- header 结束 -->
      <!-- content -->
      <div class="view-wrap" >
        <!-- <router-view></router-view> -->
      </div>
      <!-- content 结束 -->
      <!-- footer -->
      <my-footer />
      <!-- footer 结束 -->
    </div>
    <right-nav />
    <!-- 博客页面 结束 -->
  </div>
</template>
<script>
  import myHeader from 'COMMON/mHeader/Header'
  import myFooter from './common/mFooter/Footer'
  import rightNav from './common/rightNav/RightNav'


  export default {
    name: 'app',
    components: {
      myHeader,
      myFooter,
      rightNav,
    },
  }
</script>

<style lang="stylus" src="STYLUS/main.styl"></style>
<style lang="stylus">
#appindex
  width: 100%
  min-height: 100%
  min-width: 320px
  display: flex
  flex-direction: row
  position: absolute
  .admin-wrap
    width: 100%
    position: relative
    display: flex
    flex-direction: row
    .view-wrap
      flex: 1
      min-width: 311px
      height: calc(100vh)
  .content-wrap
    flex: 1
    position: relative
    .view-wrap
      max-width: 1000px
      min-width: 320px
      margin: 0 auto
      padding: 0 10px
      min-height: calc(100vh - 120px)
      transition: width .3s
  .to-top
    position: fixed
    width: 24px
    height: 24px
    background-color: $color-main
    right: 10px
    bottom: 15px
    padding: 5px
    z-index: 1050
    cursor: pointer
    line-height: 0
    display: flex
    flex-direction: row
    align-items: flex-start
    .to-top-line
      position: relative
      width: 2px
      height: 100%
      margin-left: 4px
      background-color: $color-white
      &:first-child
        margin-left: 0px

.slide-fade-enter-active
  transition: all .3s ease
.slide-fade-leave-active
  transition: all .3s ease
.slide-fade-enter
.slide-fade-leave-to
  transform: translateY(20px)
  opacity: 0

.fade-enter-active, .fade-leave-active
  transition: opacity .3s
.fade-enter, .fade-leave-to
  opacity: 0
</style>

