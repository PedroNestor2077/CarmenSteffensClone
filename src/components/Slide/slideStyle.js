import styled from 'styled-components'

export const  SlideS=styled.div`
    position:relative;  
    width:100%;
    height:auto;
    background-color:red;
    #next{
        position:absolute;
        right:10px;
        height:100%;
    }
    #prev{
        position:absolute;
        left:10px;
        height:100%;
    }
`;

export const Wrapper=styled.div`
    min-width:100%;
    height:auto;
    overflow-x:hidden;
`;

export const Slider=styled.div`
    min-width:100vw;
    height:auto; 
    display:flex;  
    margin-left:${props=> `${props.margin}px`};
`;

export const Image=styled.img`
    width:100vw;
`;

export const Info=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:50px;
    background-color:#000;

`;

export const InfoText=styled.a`
    color:white; 
    font-size:12px;
    margin-left:30px;
`;

export const ImageIndex=styled.button`
    background-color:white;
    cursor:pointer;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    background-color:${props=>`${props.collor}`};
    width:12px;
    height:12px;
	border:solid 1px white;
    margin-left:5px;
`;


export const ImageControl=styled.div`
    background-color:transparent;
    position:absolute;
    bottom:80px;
    width:100%;
    display:flex;
    justify-content:center;
`;
