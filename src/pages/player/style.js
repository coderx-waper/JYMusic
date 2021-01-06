import styled from 'styled-components'

export const PlayerBarWrapper = styled.div `
  position:fixed;
  left:0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position:0 0;
  background-repeat: repeat;
  .content{
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    height: 47px;
    bottom: 0;
    left: 50%;
    transform:translateX(-50%)
  }

`

export const Controller = styled.div `
  display: flex;
  align-items:center;
  .prev , .next{
    width:28px;
    height: 28px; 
    cursor: pointer
  }

  .prev{
    background-position:0 -130px 
  }
  .next{
    background-position:-82px -130px
  }

  .play{
    width:36px;
    height: 36px;
    background-position:-1px -166px
  }

`

export const PlayerInfo = styled.div `
 display:flex;
 align-items:center;
 width:642px;
 .image { 
   width:34px;
   height:34px;
   border-radius:5px
 }
 .info {
   flex:1;
   color: #a1a1a1;
   margin-left:10px;
   .progress{
     display: flex;
     align-items: center;
     height: 18px;
     margin-bottom:8px;
     .ant-slider{
       width:493px;
       margin-right:10px;
       
       .ant-slider-rail{
         height: 9px;
         background: url(${require("@/assets/img/progress_bar.png").default}) 0 -30px;
       }
       .ant-slider-track {
         height: 9px;
         background : url(${require("@/assets/img/progress_bar.png").default}) 0 -66px
       }
       .ant-slider-handle{
         width:22px;
         height: 22px;
         background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -252px;
         border: none;
         /* margin-to */
       }
     }
     

     .time{
       .divider{
         margin: 0 3px
       }
       .now-time{
        color:#e1e1e1;
       }
       
     }
   }
   .song{
     color: #e8e8e8;
     position : relative;
     margin-top:8px;
     margin-left:8px;
     .singer-name{
       color: #9b9b9b;
       margin-left:10px;
   }
 }
}

`
export const Operator = styled.div `
 display:flex;
 
 .btn{
   width:25px;
   height:25px;
   cursor:pointer;
   margin:11px 2px 0 0;
 }
 .favor{
   background-position: -92px -166px;
 }
 .share{
   background-position: -118px -167px;
 }
 .right{
   width: 126px;
   padding-left:13px;
   background-position: -149px -248px;

   .voice{
     background-position: -5px -250px;
   }
   
   .circulation{
     background-position: -6px -346px;
   }
 }
`