import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #444;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 3rem;

  h1 {
    font-weight: 900;
    margin-bottom: 0.5rem;
    font-size: 9rem;
  }

  h3 {
    font-weight: 900;
    margin: 2rem 0;
    font-size: 7rem;
    line-height: 0.9;
  }

  p {
    font-weight: 100;
    margin: 2rem 0;
    font-size: 1.2rem;
    letter-spacing: 1.3rem;
  }

  /* for vertical Ipad pro */
  @media screen and (max-width: 1024px) {
    padding: 1rem 6rem;
  }

  @media screen and (max-width: 480px) {
    h1 {
    font-weight: 900;
    margin-bottom: 0.5rem;
    font-size: 7rem;
  }

  h3 {
    font-weight: 900;
    margin: 2rem 0;
    font-size: 7rem;
    line-height: 0.9;
  }

  p {
    font-weight: 100;
    margin: 2rem 0;
    font-size: 1rem;
    letter-spacing: 1.3rem;
  }
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: auto;
  height: auto;
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
    max-width: 80%;
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 100px;
    left: 100px;
  }

  ${Image}:nth-child(2) {
    top: 200px;
    right: 120px;
  }

  ${Image}:nth-child(3) {
    top: 250px;
    left: 250px;
  }

  ${Image}:nth-child(4) {
    bottom: 200px;
    left: 100px;
  }

  ${Image}:nth-child(5) {
    bottom: 120px;
    right: 150px;
  }
`;
