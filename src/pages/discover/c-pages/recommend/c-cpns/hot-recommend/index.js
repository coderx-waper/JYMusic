import React, { memo, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';


import HotRecommendTitleTheme from '@/components/themCpn-recommend';
import { HotRecomendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators';
import SongCover from '@/components/songs-cover';

export default memo(function JYHotRecommend() {

    // state

    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        //获取hotRecommends数据
        hotRecommends: state.getIn(["recommend", "hotRecommends"])

    }), shallowEqual);
    const dispatch = useDispatch();

    // others hooks

    useEffect(() => {
        //使用dispatch发送请求数据
        dispatch(getHotRecommendAction(8));
    }, [dispatch]);

    return (
        <HotRecomendWrapper>
            <HotRecommendTitleTheme title="热门推荐" classifys={["华语", "流行", "摇滚", "民谣", "电子"]} />
            <div className="recomend-list">
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <SongCover info={item} key={item.id}>{item.name}</SongCover>
                        )
                    })
                }
            </div>
        </HotRecomendWrapper>
    )
})
