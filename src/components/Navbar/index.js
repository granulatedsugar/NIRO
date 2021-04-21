import React, { Component } from "react";
import { FaBars, FaEnvelope } from "react-icons/fa";
import DribbleButton from "react-dribble-button";
import {
  Nav,
  NavbarContainer,
  NavBrand,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./NavbarElement";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Nav>
          <NavbarContainer>
            <NavBrand to="/">NIRO</NavBrand>
            <MobileIcon>
              <FaBars onClick={this.toggleNav} />
            </MobileIcon>
            <SidebarContainer
              isOpen={this.state.isNavOpen}
              onClick={this.toggleNav}
            >
              <Icon onClick={this.toggleNav}>
                <CloseIcon />
              </Icon>
              <SidebarWrapper>
                <SidebarMenu>
                  <SidebarLink to="/about" onClick={this.toggleNav}>
                    About
                  </SidebarLink>
                  <SidebarLink to="web" onClick={this.toggleNav}>
                    Web
                  </SidebarLink>
                  <SidebarLink to="/mobile" onClick={this.toggleNav}>
                    Mobile
                  </SidebarLink>
                  <SidebarLink to="/design" onClick={this.toggleNav}>
                    Design
                  </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">LET'S TALK</SidebarRoute>
                </SideBtnWrap>
              </SidebarWrapper>
            </SidebarContainer>
            <NavMenu>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/web">Web</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/mobile">Mobile</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/design">Design</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">LET'S TALK</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </React.Fragment>
    );
  }
}

export default Navbar;