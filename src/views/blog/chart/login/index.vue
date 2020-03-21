<template>
  <transition name="slide-top">
    <div class="login">
      <i @click="showAbout" class="icon-about" title="关于"></i>
      <a href="https://microzz.com/" target="_blank" title="microzz.com"
        ><i class="icon-website"></i
      ></a>
      <i class="iconfont icon-liaotian icon"></i>
      <h2 class="text">请输入您的名字</h2>
      <input @keyup.enter="login" v-model.trim="name" type="text" autofocus />

      <transition name="showAbout">
        <!-- <About v-if="isShowAbout"></About> -->
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      ok:true,
      name: ""
    };
  },
  computed: {
    isShowAbout() {}
  },
  methods: {
    login() {
      if (this.name === "") {
        return;
      }
      this.$router.push("/chart");
    },
    showAbout() {}
  }
};
</script>

<style scoped lang="stylus">
.slide-top-enter-active
  transition: all .5s ease-out;

.slide-top-leave-active
  transition: all 0 ease;

.slide-top-enter, .slide-top-leave-active
  transform: translateY(-450px);
  opacity: 0;



.login
  position: absolute;
  display: flex;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #070707;
  color: #ffffff;


.icon
    font-size 60px
    margin-bottom 30px
.text
    margin-bottom 30px
    letter-spacing 1px

input {
      width: 300px;
      padding: 5px 10px;
      margin-top: 10px;
      background-color: #070707;
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
      text-align: center;
      font-size: 2rem;
      border-bottom:white 1px solid;
      border-left-width:0px;
      border-right-width:0px;
      border-top-width:0px;
      letter-spacing: 2px;
    }
</style>
