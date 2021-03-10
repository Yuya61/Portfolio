import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicLarryContainer, Image } from "./PicLarryElements";
import Larry from "../../images/Larry.png";

const PicLarry = () => {
  return (
    <Parallax className="Container" id="larry" y={[-15, 15]} tagOuter="figure">
      <PicLarryContainer>
        <Image src={Larry} />
      </PicLarryContainer>
    </Parallax>
  );
};

export default PicLarry;
