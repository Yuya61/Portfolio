import React, { useState, useEffect } from "react";
import { TiEquals } from "react-icons/ti";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import * as AiIcons from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavSNS,
  NavMail,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  function NonClickedAnimateLogo(props) {
    return <NavLogo to="/" onClick={toggleHome} />;
  }

  function ClickedAnimateLogo(props) {
    return (
      <NavLogo
        to="/"
        onClick={toggleHome}
        animate={{
          scale: [0.7, 1.3, 1.3, 0.7, 0.7],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
    );
  }

  function AnimateLogo(props) {
    const isClicked = props.isClicked;
    if (isClicked) {
      return <ClickedAnimateLogo />;
    }
    return <NonClickedAnimateLogo />;
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#838383" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <AnimateLogo to="/" onClick={toggleHome} isClicked={true} />
            <MobileIcon onClick={toggle}>
              <TiEquals />
            </MobileIcon>
            <NavSNS>
              <a target="_blank" href="https://dribbble.com/Hashirizaki">
                <AiIcons.AiOutlineDribbble />
              </a>
              <a target="_blank" href="https://www.behance.net/yuyahashirizaki">
                <AiIcons.AiFillBehanceSquare />
              </a>
              <a target="_blank" href="https://github.com/Yuya61">
                <AiIcons.AiFillGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yuya-hashirizaki-9b0065191/"
              >
                <AiIcons.AiFillLinkedin />
              </a>
            </NavSNS>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Sign_Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMail>
              <a target="_blank" href="mailto:hashirizaki61@gmail.com">
                <HiMail />
              </a>
            </NavMail>
            {/* <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
