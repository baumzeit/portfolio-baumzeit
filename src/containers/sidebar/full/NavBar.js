import React from 'react';
import styled from 'styled-components';
import NavLinks from '../NavLinks';
import SocialIconsBar from '../SocialIconsBar';
import PulseTag from './PulseTag';
import { wideConfig as w, narrowConfig as n } from './sidebarConfig';

const transitionDuration = '300ms';

const NavBar = styled.aside`
  min-height: 100vh; 
  padding-top: 5.6vh;
  display: grid;
  grid-template-rows: auto 2fr 3fr;
  position: relative;
  width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
  background: ${props => props.theme.wide ? w.bg : n.bg};

  &.keepSize-enter {

    & #avatar {
      opacity: 0.01;
      z-index: 1;
    }
  }

   &.keepSize-enter.keepSize-enter-active {
    
    & #avatar {
      opacity: 1;
      transition: opacity ${transitionDuration} ease-out;
    }
  }

  &.keepSize-enter-done {

    & #avatar {
      opacity: 1;
    }
  }

  &.resize-enter {
    width: ${props => !props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => !props.theme.wide ? w.bg : n.bg};
    box-shadow: ${props => !props.theme.wide ? w.shadow : n.shadow};
    
    & .socialIcon {
      font-size: ${props => !props.theme.wide ? w.sizeIcon : n.sizeIcon};
    }

    & #header {
      width: ${props => !props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 0.01;
    }

    & .link {
      color: ${props => !props.theme.wide ? w.color : n.color};
      border-bottom: 1px solid ${props => !props.theme.wide ? w.underline.passive : n.underline.passive};
      padding-left: ${props => !props.theme.wide ? w.indent : n.indent};
      font-size: ${props => !props.theme.wide ? w.font : n.font};
    }
    
  }

  &.resize-enter.resize-enter-active {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};
    box-shadow: ${props => props.theme.wide ? w.shadow : n.shadow};
    transition: width ${transitionDuration} ease,
                background ${transitionDuration} ease,
                box-shadow ${transitionDuration} ease;

    & .socialIcon {
      font-size: ${props => props.theme.wide ? w.sizeIcon : n.sizeIcon};
      transition: font-size ${transitionDuration} ease;
    }           

    & #header {
      width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
      transition: width ${transitionDuration} ease;
    }

    & #avatar {
      opacity: 1;
      transition: opacity ${transitionDuration} ease;
    }

    & .link {
      color: ${props => props.theme.wide ? w.color : n.color};
      padding-left: ${props => props.theme.wide ? w.indent : n.indent};
      border-bottom: 1px solid ${props => props.theme.wide ? w.underline.passive : n.underline.passive};
      font-size: ${props => props.theme.wide ? w.font : n.font};
      transition: color ${transitionDuration} ease,
                  padding-left ${transitionDuration} ease,
                  font-size ${transitionDuration} ease,
                  border-bottom ${transitionDuration} ease;
    }
  }

  &.resize-enter-done {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};
    box-shadow: ${props => props.theme.wide ? w.shadow : n.shadow};


    & .socialIcon {
      font-size: ${props => props.theme.wide ? w.sizeIcon : n.sizeIcon};
    }

    & #header {
      width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 1;
    }

    & .link  {
      color: ${props => props.theme.wide ? w.color : n.color};
      padding-left: ${props => props.theme.wide ? w.indent : n.indent};
      font-size: ${props => props.theme.wide ? w.font : n.font};
      border-bottom: 1px solid ${props => props.theme.wide ? w.underline.passive : n.underline.passive};
    }
  }
`;

const IconsBarWrapper = styled.div`
  margin-left: 5%;
  margin-right: 10%;
  position: relative;
`;

const SideHeader = styled.div`
  margin-top: 4vh;
  min-width: ${props => props.theme.wide ? '11rem' : '4.5rem'}; 
  width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
  border-radius: 0 0.35em 0.35em 0;
  box-shadow: 0 0.1rem 0.5rem 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.02); /*0 0.15em 1.6em -0.5em rgba(30, 30, 30, 0.7);*/
  overflow: hidden;
  position: relative;
`;

const Avatar = styled.div`
  background: url('${props => `/avatars/${props.theme.navImg}`}');
  background-size: cover;
  background-position: right center;
  height: 100%;
`;

const LinkWrapper = styled.div`
    margin: 3.5vh 0 9vh 0;
    min-height: 10rem;

  & .link {
    flex: 1;
    display: flex;
    align-items: flex-end;
    padding: 0.3rem 0.3rem 0.1rem 0;
    padding-left: ${props => props.theme.wide ? w.indent : n.indent};
    color: ${props => props.theme.wide ? w.colorFont.passive : n.colorFont.passive};
    font-size: ${props => props.theme.wide ? w.font : n.font};
    border-bottom: 1px solid ${props => props.theme.wide ? w.underline.passive : n.underline.passive};

    & :hover, & :focus {
      border-color: ${props => props.theme.wide ? w.underline.hover : n.underline.hover};
      color: ${props => props.theme.wide ? w.colorFont.hover : n.colorFont.hover};
      transition: border-color 160ms ease,
                color 160ms ease;
    }
    &.active {
      border-color: ${props => props.theme.wide ? w.underline.active : n.underline.active};
      color: ${props => props.theme.wide ? w.colorFont.active : n.colorFont.active};
      pointer-events: none;
    }
  }
`;

export default () => (
  <NavBar>
    <PulseTag>v0.7.1</PulseTag>
    <IconsBarWrapper>
      <SocialIconsBar />
    </IconsBarWrapper>
    <SideHeader id="header">
      <Avatar id="avatar"/>
    </SideHeader>
    <LinkWrapper>
      <NavLinks />
    </LinkWrapper>
  </NavBar>
)
