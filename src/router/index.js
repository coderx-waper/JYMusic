import React from 'react';
import { Redirect } from "react-router-dom";


import JYDiscover from '../pages/discover';
import JYMine from '../pages/mine';
import JYFriend from '../pages/friend';
import JYRecommend from '../pages/discover/c-pages/recommend';
import JYRanking from '../pages/discover/c-pages/raking';
import JYSong from '../pages/discover/c-pages/song';
import JYDjradio from '../pages/discover/c-pages/djradio';
import JYSinger from '../pages/discover/c-pages/singer';
import JYAlbum from '../pages/discover/c-pages/album';


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to='/discover'/>
        )
    },
    {
        path: "/discover",
        component: JYDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to='/discover/recommend'/>
                )
            },
            {
                path: "/discover/recommend",
                component: JYRecommend
            },
            {
                path: "/discover/ranking",
                component: JYRanking
            },
            {
                path: "/discover/song",
                component: JYSong
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: JYDjradio
            },
            {
                path: "/discover/singer",
                component: JYSinger
            },
            {
                path: "/discover/album",
                component: JYAlbum
            },
        ]
    },
    {
        path: "/mine",
        component: JYMine
    },
    {
        path: "/friend",
        component: JYFriend
    },
]

export default routes;