import React, { memo } from 'react';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from '../recommend/style';
import JYTopBanner from './c-cpns/top-banner';
import JYHotRecommend from '../recommend/c-cpns/hot-recommend';
import JYNewAlbum from '../recommend/c-cpns/new-album'
import JYRecommendRaking from '../recommend/c-cpns/recommend-raking'
export default memo(function JYRecommend() {
    
    return (
        <RecommendWrapper>
            <JYTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    {/* 热门推荐 */}
                    <JYHotRecommend />
                    {/* 新碟上架 */}
                    <JYNewAlbum/>
                    {/* 榜单 */}
                    <JYRecommendRaking/>

                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
})

