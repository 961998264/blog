const home = r => require.ensure([], () => r(require('VIEWS/blog/home/index.vue')), 'home')
const article = r => require.ensure([], () => r(require('VIEWS/blog/article/index.vue')), 'article')
const about = r => require.ensure([], () => r(require('VIEWS/blog/about/index.vue')), 'about')


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
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
]
