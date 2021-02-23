import React from 'react'
import {MainHeaderS,Logo,LogoContainer,User,SubHeaderLink,NavBar,Arrow,SearchBar,Tools} from './headerStyle'
import {BiUser,BiShoppingBag,BiSearchAlt2, BiSearchAlt} from 'react-icons/bi'
import {Button,Input} from '../generic/genericStyles'
function MainHeader(){
    return(
        <MainHeaderS>
            <LogoContainer>
               
               <Tools>
                    <User>
                        <SubHeaderLink href='#'>Meu Perfil<BiUser size='25px' class='HeaderIco'/></SubHeaderLink>
                        <SubHeaderLink href="#">Sacola<BiShoppingBag size='25px' class='HeaderIco'/></SubHeaderLink>
                    </User>
                    <SearchBar>
                            <Input placeholder='Faça sua busca aqui'></Input>
                            <Button id="icoSearch"><BiSearchAlt  size='100%'/></Button>
                    </SearchBar>
                </Tools>
            <Logo src='images/logo.jpg'></Logo>
            </LogoContainer>
            <NavBar>
                <SubHeaderLink >
                    SAPATOS <Arrow/>
                </SubHeaderLink>
                <SubHeaderLink>
                    BOLSAS <Arrow/>
                </SubHeaderLink>
                <SubHeaderLink>
                    ROUPAS <Arrow/>
                </SubHeaderLink>
                <SubHeaderLink>
                    CS YOUNG <Arrow/>
                </SubHeaderLink>
                <SubHeaderLink>
                    ACESSÓRIOS <Arrow/>
                </SubHeaderLink>
                <SubHeaderLink>
                    OUTLET <Arrow/>
                </SubHeaderLink>
               

            </NavBar>
        </MainHeaderS>
    )
}

export default MainHeader