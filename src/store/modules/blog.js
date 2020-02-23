


import * as api from 'API/'
const state = {
    userName: 'Ming.',
    articleList:[]
}

const getters = {
    getUserName(state) {
        return state.userName
    },
    GetArticleList(state){
        return state.userName
    }
}

const mutations = {
    SET_USER_NAME(state, data) {
        state.userName = data
    },
    SET_ARTICLE_LIST(state,data){
        state.articleList = data
    }
}

const actions = {
    getUserNameApi(store){

    },
    getArticleList(store){
      return api.article.getAtricleApi()
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}