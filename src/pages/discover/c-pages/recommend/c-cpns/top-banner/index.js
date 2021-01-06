import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'
import { Carousel } from 'antd'

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function JYTopBanner() {

    // state
    const [currentIndex, setcurrentIndex] = useState(0)

    /**
     * 组件和redux关联：数据获取和操作 
     * shallowEqual 浅层比较，着眼性能
     */
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);


    //其他hooks
    const dispatch = useDispatch();
    const bannerRef = useRef();

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);

    // 设置当前滚动位置
    const changeBanner = useCallback((from, to) => {
        setTimeout(() => {
            setcurrentIndex(to)
        }, 0);
    }, [])


    const bgImage = (topBanners[currentIndex]) && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay beforeChange={changeBanner} ref={bannerRef}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
