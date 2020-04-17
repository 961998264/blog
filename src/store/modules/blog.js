


import * as api from 'API/'
const state = {
  userName: 'Ming.',
  articleList: []
}

const getters = {
  getUserName (state) {
    return state.userName
  },
  GetArticleList (state) {
    return state.userName
  }
}

const mutations = {
  SET_USER_NAME (state, data) {
    state.userName = data
  },
  SET_ARTICLE_LIST (state, data) {
    state.articleList = data
  }
}

const actions = {
  getUserNameApi (store) {

  },
  getBlogCategoryList (store) {
    return api.tags.getBlogCategoryListApi()
  },
  getBlogTagList (store) {
    return api.tags.getTagsListApi()
  },
  getArticleList (store) {
    return api.article.getAtricleApi()
  },
  async getArticleDetail () {
    const res = await api.article.getAtricleDetailApi()
    console.log("getArticleDetail -> res", res)
    return Promise.resolve(res)
  },
  getBlogArticleArchives (store) {
    return api.archives.getArchivesApi()
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}