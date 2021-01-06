import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-until'
import {
    AlbumCoverWrapper,
} from './style'

export default memo(function JYAlbumCover(props) {
    const { info, height = 130, width = 153, bgp = "-845px" } = props;
    return (
        <AlbumCoverWrapper width={width} height={height} bgp={bgp}>
            <div className="album-image">

                <img src={getSizeImage(info.picUrl, width)} alt=""></img>
                <a href="/todo" className="cover image_cover">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="song text-nowrap">{info.name}</div>
                <div className="author text-nowrap">{info.artist.name}</div>
            </div>
        </AlbumCoverWrapper>
    )
})
