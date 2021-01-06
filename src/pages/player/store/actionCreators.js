import { getSongDetail } from '../../../servers/songDetail'
import * as actionTypes from './constant'

const changeCurrentSongAction = (currentSong) =>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

/**
 * 对外提供的接口能力
 */
export const getSongDetailAction = (ids)=>{
    return dispatch => {
        getSongDetail(ids).then(res => {
            let song = null;
            song = res.songs && res.songs[0];
            dispatch(changeCurrentSongAction(song));
        })
    }
}