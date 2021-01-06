import { Map } from 'immutable';
import * as actionTypes from './constants';


const defaultState = Map({
    topBanners: [],//头部banners数据
    hotRecommends: [],//热门推荐数据
    newAlbums: [],//新碟上架
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_RECOMMEND:
            return state.set("topBanners", action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbums);
        default:
            return state;
    }
};

export default reducer;