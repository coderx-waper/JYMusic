import React, { memo } from 'react'

import HotRecommendTitleTheme from '@/components/themCpn-recommend';
import JYTopRaking from '@/components/top-raking';
import {
    RecommendRakingWrapper,
} from './style'

export default memo(function JYRecommendRaking() {
    return (
        <RecommendRakingWrapper>
            <HotRecommendTitleTheme title="榜单" classifys={[]} />
            <div className="content">
                <JYTopRaking/>
                <JYTopRaking/>
                <JYTopRaking/>
            </div>
        </RecommendRakingWrapper>
    )
})
