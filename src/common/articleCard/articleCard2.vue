<template>
  <div id="article-card">

  </div>
</template>

<script>

export default {
  name: 'article-card',
  props: ['article'],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.article, 'sss')
  },
  computed: {
  },
  methods: {
    showArticle () {
      this.$router.push({
        name: 'article',
        query: {
          id: this.article.article.id
        }
      })
    },
    toList (type, id) {
      this.$router.push({
        name: 'articleList',
        query: {
          type: type,
          id: id
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~STYLUS/color.styl';

#article-card {
  position: relative;
  background-color: $color-white;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
