import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends, getNewAlbums } from '@/servers/recommend';

const changeTopBannersAction = (res) =>({
    type: actionTypes.CHANGE_RECOMMEND,
    topBanners: res.banners
});

const chageHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
});

const changeNewAlbumsAction = (res) =>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbums:res.albums

});

// 获取顶部Banner数据
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannersAction(res));
        })
    }
};

// 获取发现->推荐->热门推荐数据
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(chageHotRecommendsAction(res));
        })
    }
};

// 抓取发现音乐->推荐->新碟上架
export const getNewAlbumsAction = (limit)=>{
    return dispatch =>{
        getNewAlbums(limit).then( res =>{
            dispatch(changeNewAlbumsAction(res));
        })
    }
}

