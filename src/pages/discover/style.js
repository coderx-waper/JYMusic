import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
 .top {
     height:30px;
     background-color:#C20C0C;
 }
`

export const TopMenu = styled.div`
  display:flex;
  padding-left:180px;
  .item{
    a {
      display: inline-block;
      line-height:20px;
      height:20px;
      color:#fff;
      margin:auto 15px;
      text-decoration:none;
      padding-top:1px;
    }
    &:hover , &:active {
      text-decoration: none;
      background-color: #9B0909;
      border-radius: 20px;
    }
  }
`