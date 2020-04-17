
import { articleList, articleDetail } from 'CONFIG/mock.js'
export const getAtricleApi = (params) => {
  return Promise.resolve(articleList)
}
export const getAtricleDetailApi = (params) => {
  return Promise.resolve(articleDetail)
}
