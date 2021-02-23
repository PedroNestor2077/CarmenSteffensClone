import React from 'react'
import {SubHeaderS,SubHeaderContainer,SubHeaderLink,SubHeaderLinkContainer} from './headerStyle'

function SubHeader(){
    return(
        <SubHeaderS>
            <SubHeaderContainer>
                <SubHeaderLinkContainer id='buttonLink'>
                    <SubHeaderLink href='#'>Carmen Steffens</SubHeaderLink>
                    <SubHeaderLink href='#'> Raphael Steffens</SubHeaderLink>
                    <SubHeaderLink href='#'>CS Club</SubHeaderLink>
                </SubHeaderLinkContainer>
                <SubHeaderLinkContainer id="smallLink">
                    <SubHeaderLink href='#'> Central de atendimento</SubHeaderLink>
                    <SubHeaderLink href='#'> Seja uma Consultora</SubHeaderLink>
                    <SubHeaderLink href='#'>Corporativo</SubHeaderLink>
                    <SubHeaderLink href='#'>Blog</SubHeaderLink>
                </SubHeaderLinkContainer>
            </SubHeaderContainer>
        </SubHeaderS>
    )
}

export default SubHeader