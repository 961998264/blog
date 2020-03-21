<template>
  <div>
    <transition name="slide-left">
      <div class="chart">
        <!-- chart head -->
        <div class="chart-head">
          <div>
            <i class="iconfont icon icon-jiqiren"></i>
          </div>
          <div class="qunliao">
            <h2 class="title">
              <i class="iconfont icon icon-qunliao">群聊</i>
            </h2>
          </div>
          <div @click="backHome">
            <i class="iconfont icon icon-ziyuan"></i>
          </div>
        </div>

        <!-- chart centnt -->
        <div class="chart-centent">
          <div v-for="item of msgs" class="chart-item">
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div
              class="msg-from"
              :style="{ 'flex-direction': item.self ? 'row-reverse' : 'row' }"
            >
              <img class="header-img" :src="item.avatarUrl" alt="" />
              <span class="loc">[{{ item.loc }}]</span>
              <span class="msg-author">{{ item.from }}</span>
            </div>
            <div
              class="chart-content"
              :style="{ 'flex-direction': item.self ? 'row-reverse' : 'row' }"
            >
              <div class="msg-content-text">{{ item.content }}</div>
            </div>
          </div>
        </div>

        <!-- chart input -->
        <div class="chart-input">
          <transition name="slide-left">
            <div v-show="isShowEmoji" class="emoji-display">
              <ul>
                <li v-for="item of emojis" @click="selectEmojis(item)">
                  {{ item }}
                </li>
              </ul>
            </div>
          </transition>
          <div class="enjoy" @click="isShowEmoji = !isShowEmoji">
            <i class="iconfont icon-biaoqing"></i>
          </div>
          <el-input
            @focus="isShowEmoji = false"
            v-model="input"
            @keyup.enter="sendMsg"
            placeholder="左上角还有自能机器人哦"
          ></el-input>
          <el-button @click="sendMsg" type="primary">发送</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Api from "../../../api/index";
export default {
  data() {
    return {
      oContent: {},
      msgs: (localStorage.msgs_group &&
        JSON.parse(localStorage.msgs_group)) || [
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content:
            "呜呜呜呜呜呜呜请求请求群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群群",
          self: false
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: false
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: false
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: false
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: true
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: true
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: true
        },
        {
          date: "2015-11-09 09:57:08",
          loc: "江西省南昌市",
          from: "linyongming",
          avatarUrl: require("../../../assets/images/touxiang1.jpg"),
          content: "test",
          self: true
        }
      ],
      isShowEmoji: false,
      input: "",
      emojis: [
        "😂",
        "🙏",
        "😄",
        "😏",
        "😇",
        "😅",
        "😌",
        "😘",
        "😍",
        "🤓",
        "😜",
        "😎",
        "😊",
        "😳",
        "🙄",
        "😱",
        "😒",
        "😔",
        "😷",
        "👿",
        "🤗",
        "😩",
        "😤",
        "😣",
        "😰",
        "😴",
        "😬",
        "😭",
        "👻",
        "👍",
        "✌️",
        "👉",
        "👀",
        "🐶",
        "🐷",
        "😹",
        "⚡️",
        "🔥",
        "🌈",
        "🍏",
        "⚽️",
        "❤️",
        "🇨🇳"
      ]
    };
  },
  mounted() {
    this.oContent = document.querySelector(".chart-centent");
    this.oContent.scrollTop = this.oContent.scrollHeight;

    this.$socket.emit("online", this.$store.state.userName);

    this.$socket.on("onLine", name => {
      if (!name) return;
      let oOnline = document.createElement("div");
      oOnline.className = "online";
      oOnline.innerText = name + "上线了";
      this.oContent.appendChild(oOnline);
      this.oContent.scrollTop = this.oContent.scrollHeight;
    });

    // 接收群聊消息
    this.sockets.subscribe("receiveGroupMsg", data => {
      !data.self && this.msgs.push(data);
      console.log(data);
      setTimeout(() => {
        this.oContent.scrollTop = this.oContent.scrollHeight;
      }, 0);
    });
  },
  methods: {
    backHome() {
      this.$router.push("/chart_login");
    },
    selectEmojis(item) {
      this.input += item;
    },
    sendMsg() {
      //发送信息给服务端
      this.$socket.emit("sendGroupMsg", {
        self: true,
        date: this.moment().format("YYYY-MM-DD HH:mm:ss"),
        loc: "江西省南昌市",
        from: `${localStorage.name}` || this.$store.userName,
        content: this.input,
        avatarUrl: require("../../../assets/images/touxiang1.jpg")
      });
      this.msgs.push({
        self: true,
        date: "2015-11-09 09:57:08",
        loc: "江西省南昌市",
        from: "linyongming",
        avatarUrl: require("../../../assets/images/touxiang1.jpg"),
        content: this.input
      });
      this.isShowEmoji = false;
      this.input = "";
      setTimeout(() => {
        this.oContent.scrollTop = this.oContent.scrollHeight;
      }, 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
.slide-left-enter-active {
  transition: all .4s ease;
}
.slide-left-leave-active {
  transition: all .0 ease;
}
.slide-left-enter, .slide-left-left-active {
  transform: translateX(-375px);
  opacity: 0;
}
.chart
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    height 700px
    width 40%
    min-width 340px
    border 1px sold red
    display flex
    flex-direction column
    justify-content center
    align-items center
    overflow hidden
  .chart-head
    display flex
    justify-content space-between
    align-items center
    padding 0 20px
    width 100%
    height 50px
    background-color #2196f3
    color #fff
  .qunliao
    .icon-qunliao
     &:before
      margin-right 4px

.chart-box
    width:80%
    height 500px
    border 1px solid red
    position relative
    .input-box
        position absolute
        bottom 0
        left 0

.chart-centent
  flex: 1;
  padding 20px
  width: 100%;
  background-color: rgba(0, 0, 0, .1);
  overflow: auto;

  .msg-date
    text-align: center;
    color: gray;
    font-size: 80%;
    margin 6px 0
  .msg-from
    display: flex;
    align-items: center;

    .loc
      color: gray;
      font-size: 60%;
      margin-right: 5px;

  .header-img
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right 8px
  .chart-content
    display flex
    align-items center
   .msg-content-text
      margin-top: 5px;
      background-color: white;
      width: 200px;
      padding: 6px 10px;
      border-radius: 10px;

.chart-item
  padding 20px 0
.chart-input
  position: relative;
  display: flex;
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, .1);
  .emoji-display
    position absolute
    width 100%
    height 240px
    background white
    top -240px
    ul
      width 100%
      padding 16px 6px 0
      height 100%
      display flex
      flex-wrap wrap
      li
        font-size 28px
        margin 0 8px 0 0
        text-align center
        cursor pointer

.icon
  font-size 22px
  cursor pointer
.enjoy
  width 50px
  text-align center
 .icon-biaoqing
  font-size 26px
  line-height 40px

.online
  width: 200px;
  margin: 3px auto;
  border-radius: 4px;
  text-align: center;
  background-color: #FFFDE7;
</style>
