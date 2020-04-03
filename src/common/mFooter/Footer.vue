<template>
  <div id="m-footer">
    <div class="footer-wrap">
      这是一句话简介
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "m-footer",
  components: {},
  data () {
    return {
      runningTime: 0
    };
  },
  computed: {
  },
  created () {
    this.running();
  },
  methods: {
    running () {
      let startTime = new Date("2018/08/01 00:00:00");
      let timer = setInterval(() => {
        let time = new Date() - startTime;
        let day = parseInt(time / 1000 / 60 / 60 / 24, 10);
        let hour = parseInt((time / 1000 / 60 / 60) % 24, 10);
        let minute = parseInt((time / 1000 / 60) % 60, 10);
        let second = parseInt((time / 1000) % 60, 10);
        this.runningTime = `${day}天${hour}小时${minute}分${second}秒`;
      }, 1000);
    }
  }
};
</script>

<style lang="stylus" scoped>
#m-footer {
  height: auto !important;
  background: #2e3033;
  color: #fff;
  padding: 2vh;

  .footer-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>


<style lang="stylus" scoped>
@media screen and (max-width: 750px) {
}
</style>