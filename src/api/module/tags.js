
import * as Mock from '../../config/mock'


export const getTagsListApi = (params)=>{
    return Promise.resolve(Mock.tagsList)
}

export const getBlogCategoryListApi = (params)=>{
    return Promise.resolve(Mock.categoryList)
}