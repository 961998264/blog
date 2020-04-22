const home = r => require.ensure([], () => r(require('VIEWS/blog/home/index.vue')), 'home')
const article = r => require.ensure([], () => r(require('VIEWS/blog/article/index.vue')), 'article')
const about = r => require.ensure([], () => r(require('VIEWS/blog/about/index.vue')), 'about')
const categories = r => require.ensure([], () => r(require('VIEWS/blog/categories/index.vue')), 'categories')
const archives = r => require.ensure([], () => r(require('VIEWS/blog/archives/index.vue')), 'archives')
const chart_login = r => require.ensure([], () => r(require('VIEWS/blog/chart/login/index.vue')), 'chart_login')
const chart = r => require.ensure([], () => r(require('VIEWS/blog/chart/index.vue')), 'chart')
const word = r => require.ensure([], () => r(require('VIEWS/blog/word/index.vue')), 'word')
const addWord = r => require.ensure([], () => r(require('VIEWS/blog/word/add.vue')), 'newWord')
export default [
  {
    path: '*',
    redirect: '/home'
  },
  {
    component: home,
    path: '/home',
    name: 'home',
  },
  {
    component: word,
    path: '/word/',
    name: 'word',
  },
  {
    component: addWord,
    path: '/word/add',
    name: 'addWord',
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/archives',
    name: 'archives',
    component: archives
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/chart_login',
    name: 'chart_login',
    component: chart_login
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
]
