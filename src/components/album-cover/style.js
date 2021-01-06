import styled from 'styled-components';

export const AlbumCoverWrapper = styled.div`
width:${props => props.width + 'px'};
.album-image{
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.height + "px"};
    overflow: hidden;
    margin-top: 20px;
    img {
      width: ${props => props.height + "px"};
      height: ${props => props.height + "px"};
    }
    .cover{
       position: absolute;
       left:0;
       top:0;
       right: 0;
       bottom:0;
       background-position:0 ${props => props.bgp};
       text-indent: -9999px;
    }
    
}
.album-info{
    font-size:12px;
    width:${props => props.height + "px"};
}

`