import React, { memo, useEffect, shallowEqual, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { getNewAlbumsAction } from '../../store/actionCreators';

import HotRecommendTitleTheme from '@/components/themCpn-recommend';
import JYAlbumCover from '@/components/album-cover';
import {
    NewAlbumWrapper,
} from './style'



export default memo(function JYNewAlbum() {


    //state

    //redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);

    const dispatch = useDispatch();

    const pageRef = useRef();
    //others hooks
    useEffect(() => {
        //请求新碟数据
        dispatch(getNewAlbumsAction(10));
    }, [dispatch])

    return (
        <NewAlbumWrapper>
            <HotRecommendTitleTheme title="新碟上架" classifys={[]} />
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel ref={pageRef} dots={false}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div className="page" key="page">
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(item => {
                                                return (
                                                    <JYAlbumCover key={item.id}
                                                              info={item}
                                                              width={118}
                                                              height={100}
                                                              bgp="-570px"
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
            </div>

        </NewAlbumWrapper>
    )
})
