import React, { memo } from 'react'

import {
    HotRecommendWrapper
} from './style'

export default memo(function HotRecommendTheme(props) {

    const { title, classifys } = props;

    return (
        <HotRecommendWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="classifys">
                    {
                        classifys.map((item,index)=>{
                            return (
                                <div key={item} className="item">
                                    <a href="todo">{item}</a>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <a href="todo">更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HotRecommendWrapper>
    )
})
