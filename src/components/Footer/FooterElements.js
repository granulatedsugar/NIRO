import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.section`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #222;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 156px;
  margin-bottom: 16px;
`;

export const SocialIconLink = styled.a`
  color: #222;
  font-size: 24px;
`;
