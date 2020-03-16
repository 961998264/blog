<template>
  <div id="header-tab-bar">
    <div
      class="tab"
      v-for="(item, index) in tabs"
      :key="index"
      @click="selectTab(item)"
    >
      <i class="iconfont icon" :class="item.icon"></i>

      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {};
  },
  methods: {
    selectTab(tab) {
      this.$emit("tab-click", tab);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../stylus/color'
#header-tab-bar
    height 100%
    display flex
    justify-content center
    align-items center
    .tab
        padding: 5px 8px;
        display: inline-block;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        color: #262a30;
        background-color: #f9f9f9;
        transition: all .5s;
        border-radius: 5px;
        margin-right: 5px;
        &:hover
            color: $color-white
            background-color: $color-black
        .icon
            margin 0 5px 0 0
        span
            font-size 14px
</style>
