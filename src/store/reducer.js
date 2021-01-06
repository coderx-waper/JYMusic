import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as currentSongReducer  } from '../pages/player/store'

const cReducer = combineReducers({
    recommend: recommendReducer,
    currentSong: currentSongReducer
});

export default cReducer;