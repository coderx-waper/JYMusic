import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
 display:flex;
 justify-content:space-between;
 height:33px;
 border-bottom: 2px solid #C10D0C;
 background-position: -225px -156px;
 padding: 0 10px 4px 34px;
 .left{
     display:flex;
     align-items:center;
     .title{
         font-size:20px;
         font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
         margin-right:15px;
     }
     .classifys{
        display:flex;
        .item{
         .divider{
             margin:0 15px;
             color:#ccc;
         }
     }
     }
 }
 .right{
     display:flex;
     align-items:center;
     .icon{
         width:12px;
         height:12px;
         background-position:0 -240px;
         display:inline-block;
         margin-left:4px;

     }
 }

`