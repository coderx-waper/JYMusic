import React, { memo } from 'react'

import {
    TopRakingWrapper,
} from './style'

export default memo(function JYTopRaking() {
    return (
        <TopRakingWrapper>
            <div className="header">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="info"></div>
            </div>
            <div className="list">
                {
                    [1, 2, 3].map(item => {
                        return (
                            <h2 key={item}>{item}</h2>
                        )
                    })
                }
            </div>
            <div className="footer">footer</div>
        </TopRakingWrapper>
    )
})
