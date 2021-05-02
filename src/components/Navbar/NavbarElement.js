import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #f9f9f9;

    @media screen and (max-width: 100%) {
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
    max-width: 100%;
`;

export const NavBrand = styled(Link)`
    color: #222;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    left: 40px;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #222;
        right: 10px;
    }
`;

export const NavMenu = styled.ul`
    position: absolute;
    align-items: right;
    list-style: none;
    text-align: center;
    right: 180px;
    top: 30px;

    @media screen and (max-width: 800px) {
        display: none;
    }

`;

export const NavItem = styled.li`
    height: 80px;
    display: inline;

    
`;

export const NavLinks = styled(Link)`
    text-decoration: none;
    color: #222;
    display: inline;
    align-items: right;
    text-transform: uppercase;
    padding: 0 1rem;
    height: 100%auto;
    cursor: pointer;
    font-size: 16px;
    font-weight: 200;
    font-family: 'Roboto', sans-serif;

    :hover {
        border-bottom: 3px solid #222;
    }
  
`;

export const NavBtn = styled.nav`
    position: absolute;
    align-items: center;
    right: 40px;
    top: 30px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #222222;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #05e8ba;
        background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
        color: #fff;
    }
`

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #222222;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition:  0.2s ease-in-out;
    color:  #fff;
    cursor: pointer;

    &:hover {
        color: #05e8ba;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    margin: auto;
`;

export const SidebarRoute = styled(Link)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-color: #05e8ba;
    background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #222;
    }
`;
