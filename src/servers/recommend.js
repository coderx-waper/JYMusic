import request from './request';

export function getTopBanners() {
    return request({
        url: "/banner"
    })
};

//获取发现音乐->推荐-热门推荐数据
export function getHotRecommends (limit){
    return request({
        url:'/personalized',
        params:{
            limit
        }
    })
};

// 更新发现音乐->推荐->新碟上架数据
export function getNewAlbums (limit) {
    return request({
        url:'/top/album',
        params:{
            limit
        }
    })
}