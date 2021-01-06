import React, { memo , useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
    PlayerBarWrapper,
    Controller,
    PlayerInfo,
    Operator
} from './style'

import { Slider } from 'antd'
import { getSongDetailAction } from './store/actionCreators'
import { formatDate , getSizeImage } from '@/utils/format-until' 

export default memo(function JYPlayerBar() {

    // redux hooks
    const dispatch = useDispatch();

    const { currentSong } = useSelector(state =>({
        currentSong:state.getIn(["currentSong","currentSong"])
    }),shallowEqual)

    
    // other hooks
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    }, [dispatch])


    // other handle
    const songName = currentSong && currentSong.name
    const singerName = currentSong.ar && currentSong.ar[0].name
    const duration = currentSong.dt || 0
    const showDuration = formatDate(duration,"mm:ss")
    const picUrl = (currentSong.al && currentSong.al.picUrl)||""

    return (
        <PlayerBarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Controller>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
                    <button className="sprite_player next"></button>
                </Controller>
                <PlayerInfo>
                    <div className="image">
                        <img src={getSizeImage(picUrl,35)} alt="" />
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{songName}</span>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                          <Slider defaultValue={10}  />
                          <div className="time">
                              <span className="now-time">02:30</span>
                              <span className="divider">/</span>
                              <span className="duration">{showDuration}</span>
                          </div>
                        </div>
                    </div>
                </PlayerInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn voice"></button>
                        <button className="sprite_player btn circulation"></button>
                    </div>
                </Operator>
            </div>
        </PlayerBarWrapper>
    )
})                                                                                                         