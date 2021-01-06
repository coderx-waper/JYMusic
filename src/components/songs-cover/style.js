import styled from 'styled-components';

export const SongsCoverWrapper = styled.div`
  width: 140px;
  .cover-top {
    position: relative;
    margin-top:15px;
    &>img{//&>表示上一级选择器（这里指 cover-top）
      width:140px;
      height: 140px;
    };
    .cover{
      position: absolute;
      left: 0;
      top:0;
      width:100%;
      height: 100%;
      background-position:0 0;
      .info{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .erji{
          background-position:0 -24px;
          width:14px;
          height: 11px;
          display: inline-block;
          margin-right:5px;
        }
        .play{
          background-position:0 0;
          width:16px;
          height: 17px;
          display: inline-block;
        }
      }
    }
  }
   
`