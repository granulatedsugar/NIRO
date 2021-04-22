import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <WebsiteRights>NIRO &copy; {new Date().getFullYear()} | All Rights Reserved</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='https://www.linkedin.com/in/nicholas-roque-313081103/' 
                        target='_blank'
                        aria-label='LinkedIn'><FaLinkedin /></SocialIconLink>
                    <SocialIconLink href='https://www.github.com/granulatedsugar' 
                        target='_blank'
                        aria-label='Github'><FaGithub /></SocialIconLink>
                    <SocialIconLink href='https://www.twitter.com/nikkoroque' 
                        target='_blank'
                        aria-label='Twitter'><FaTwitter /></SocialIconLink>
                    <SocialIconLink href='roquenikko@gmail.com' 
                        target='_blank'
                        aria-label='Gmail'><FaEnvelope /></SocialIconLink>
                </SocialIcons>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
