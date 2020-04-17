<template>
  <div id="m-footer">
    <div class="m-footer-top">
      总访问量：88888
    </div>
    <div class="m-footer-bottom">

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
  height: 100px !important;
  color: #fff;

  .m-footer-top {
    height: 50%;
    color: #a0a8db;
    background: #4f60c3;
    width: 100%;
    text-align: center;
    line-height: 50px;
  }

  .m-footer-bottom {
    height: 50%;
    background: #3F51B5;
    width: 100%;
  }
}
</style>


<style lang="stylus" scoped>
@media screen and (max-width: 750px) {
}
</style>
