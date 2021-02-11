import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #010606;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaRegTimesCircle)`
  color: #cecece;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.3rem;
  left: 1.9rem;
  background: transparent;
  font-size: 1.7rem;
  outline: none;
`;

export const SidebarLogo = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-size: 10rem;
  font-weight: 900;

  color: #fff;
`;

export const SidebarWrapper = styled.div`

`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 40px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 30px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  font-weight: 300;
  letter-spacing: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-decoration: none;
  list-style: none;
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  color: #cecece;

  &:hover {
    color: #fff;
    filter: drop-shadow(0.5px 0.5px 7px #fff);
    transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
    cursor: pointer;
  }
`;

// export const SideBtnWrap = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// export const SidebarRoute = styled(LinkR)`
//     border-radius: 50px;
//     background: #444;
//     filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.3));
//     white-space: nowrap;
//     padding: 16px 64px;
//     color: #fff;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     transition: cubic-bezier(.65,0,.16,1);
//     text-decoration: none;

//     &:hover {
//         transition: 0.6s cubic-bezier(.65,0,.16,1);
//         background: #fff;
//         color: #444;
//     }
// `;
