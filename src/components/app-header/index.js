import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {
    headerLinks
} from '@/common/local-data'
import {
    HeaderWraper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function JYAppHeader() {

    const showSelectitem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink exact to={item.link}>{item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }

    return (
        <HeaderWraper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">JYMusic</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectitem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWraper>
    )
})
