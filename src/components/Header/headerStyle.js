import styled from "styled-components"

export const HeaderS=styled.div`
    background-color:blue;
    width:100vw;
    height:60px;  
`;

export const SubHeaderS=styled.div`
    display:flex;
    justify-content:center;
    background-color:#000;
    width:100%;
    height:50px;  
    border-bottom:solid white 10px;
`;

export const SubHeaderContainer=styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#000;
    width:80%;
    height:50px;  
    #buttonLink{
        a{
            font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
            color:white;
        }
    }
    #smallLink{
        a{
            padding:0px;
            font-size:14px;
            font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
            border-right:solid 1px white;
            padding-right:5px;
            padding-left:5px;
        }
    }
`;

export const SubHeaderLinkContainer=styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
    max-height:50px;
`;

export const SubHeaderLink=styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
    color:white;
    text-decoration:none;
    max-height:50px;
    margin-right:5px;
    font-size:15px;
    cursor:pointer;
`;

export const MainHeaderS=styled.div`    
    display:flex;
    justify-content:center;
    align-items:center; 
    flex-direction:column;
    width:100%;
    height:140px;  
    position:relative;
`;

export const Logo=styled.img`
    margin: 30px auto 10px;
    min-width: 150px;  
`;

export const LogoContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
`;

export const User=styled.span`
    display:flex;
    align-self:flex-end;
    justify-content:flex-start;
    width:100%;
    a{
        margin-right:20px;
        margin-left:10px;
        font-size:14px;
        background-color:inherit;
        color:black;
    }
    a:first-child {
        border-right:solid 1px gray;
        margin-right:0px;
        padding-right:10px;
    }
    .HeaderIco{
        margin-left:10px;
        
    }
`;

export const NavBar=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:45px;
    a{
        padding: 10px 10px;
        background-color:transparent;
        color:#000;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 14px;
        text-align: center;
    }
`;

export const Arrow=styled.b`
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
`;

export const SearchBar=styled.div`
    display:flex;
    align-items:center;
    width:210px;
    height:30px;
    margin-right:60px;
    margin-top:30px;
    #icoSearch{
        position:relative;
        right:18px;
    }
`;

export const Tools=styled.div`
    position:absolute;    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;    
    right:50px;
    bottom:20px;

`;
