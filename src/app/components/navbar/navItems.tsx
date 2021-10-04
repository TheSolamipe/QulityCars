import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import {slide as BurgerMenu} from "react-burger-menu";
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`
const NavItem  = styled.li<{ mobile? : any }>`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};

    ${({mobile}) => mobile && css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `}
    `}
`
function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm});

    if(isMobile){
    return (
        <BurgerMenu right styles={menuStyles}>
            <ListContainer>
                <NavItem mobile>
                    <a href="/">Home</a>
                </NavItem>
                <NavItem mobile>
                    <a href="/cars">Cars</a>
                </NavItem>
                <NavItem mobile>
                    <a href="/services">Services</a>
                </NavItem>
                <NavItem mobile>
                    <a href="/contact-us">Contact-Us</a>
                </NavItem>
            </ListContainer>
        </BurgerMenu>
    );
    }
    return (
        <ListContainer>
            <NavItem>
                <a href="/">Home</a>
            </NavItem>
            <NavItem>
                <a href="/cars">Cars</a>
            </NavItem>
            <NavItem>
                <a href="/services">Services</a>
            </NavItem>
            <NavItem>
                <a href="/contact-us">Contact-Us</a>
            </NavItem>
        </ListContainer>
    )
}

export default NavItems
