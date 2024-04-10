import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
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
            <NavBrand to="/">{this.props.title}</NavBrand>
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
                  <SidebarLink
                    to="/businessIntelligence"
                    onClick={this.toggleNav}
                  >
                    Business Intelligence
                  </SidebarLink>
                  <SidebarLink to="/web" onClick={this.toggleNav}>
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
                  <SidebarRoute to="/contact">LET'S TALK</SidebarRoute>
                </SideBtnWrap>
              </SidebarWrapper>
            </SidebarContainer>
            <NavMenu>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/businessIntelligence">
                  Business Intelligence
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/java-web">Native & Web</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/mobile">Mobile</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/design">Design</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">LET'S TALK</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
