<template>
  <div id="home" v-loading="loading">
    <div class="article-list">
      <el-row>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="(article, index) in articleList"
          :key="index">
          <article-card :article="article" />
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <div class="pagination" v-show="total > 0">
      <el-pagination background layout="prev, pager, next" :page-size="pageSize"
        @current-change="pageChange" :current-page="currentPage" :total="total">
      </el-pagination>
    </div>
    <!-- 分页 结束 -->
    <no-data v-if="total === 0" text="没有找到文章~" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { scroll } from '../../../mixins/scroll'
import store from "STORE/index.js";
import articleCard from "COMMON/articleCard/index.vue";
import noData from "COMMON/noData/index.vue";
export default {
  name: "home",
  components: {
    articleCard,
    noData
  },
  mixins: [scroll],
  data () {
    return {
      articleList: [],
      page: 0,
      pageSize: 10,
      currentPage: 0,
      total: 0,
      loading: false
    };
  },
  created () {
    this.page = 0;
    this.getList();
  },
  computed: {
    ...mapGetters(["getUserName"])
  },
  methods: {
    ...mapActions(["getArticleList"]),
    getList () {
      this.loading = true;
      this.getArticleList()
        .then(res => {
          console.log(res)
          this.loading = false;
          this.articleList = res.list;
          this.total = res.total;
          this.currentPage = res.currentPage;
          this.pageSize = res.pageSize;
        })
        .catch(() => {
          this.articleList = [];
          this.loading = false;
        })
    },
    pageChange (currentPage) {
      this.scrollToTarget(0, false)
      this.page = currentPage - 1
      this.currentPage = currentPage
      this.getList()
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '~STYLUS/color.styl';

#home {
  position: relative;
  padding: 30px 80px;
  min-height: 100px;
  width: 100%;

  .article-list {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .articlr-list-item {
      width: 25%;
      display: flex;
      justify-content: center;
    }
  }

  .pagination {
    width: 100%;
    padding: 10px 0;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    background-color: $color-white;
  }
}
</style>


<style lang="stylus" scoped>
@media screen and (min-width: 750px) {
}

<style> {
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>

