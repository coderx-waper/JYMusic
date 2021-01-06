import React, { memo } from 'react'

import { getSizeImage, getCount } from '@/utils/format-until'

import {
    SongsCoverWrapper,
} from './style'
export default memo(function JYSongsCover(props) {
    const { info } = props
    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-top">
                {info.name}
            </div>
        </SongsCoverWrapper>
    )
})
