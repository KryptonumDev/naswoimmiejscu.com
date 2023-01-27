import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledMeetsFormwomens,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledButtonsWrapper,
  StyledCircleWrapper,
  StyledAhaWrapper,
} from "./StyledMeetsFormwomens";

const MeetsFormwomens = ({
  firstBtn,
  secondBtn,
  title,
  desc,
  image,
  imageMobile,
  isWomens,
}) => {
  return (
    <Container>
      <StyledMeetsFormwomens>
        <StyledLeftWrapper>
          <StyledCircleWrapper>
            <StyledCircle />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="meets-form-womens">
            {title ? parse(title) : null}
            {isWomens ? (
              <StyledAhaWrapper>
                <svg
                  width="715"
                  height="200"
                  viewBox="0 0 715 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.08"
                    d="M73.085 190.31C70.615 196.77 66.34 200 60.26 200H6.395C4.685 200 3.165 199.43 1.835 198.29C0.695 196.96 0.125 195.44 0.125 193.73L0.41 192.02L62.54 9.90498C63.3 7.43499 64.725 5.24999 66.815 3.34998C68.905 1.44999 71.755 0.499986 75.365 0.499986H154.595C158.205 0.499986 161.055 1.44999 163.145 3.34998C165.235 5.24999 166.66 7.43499 167.42 9.90498L229.55 192.02L229.835 193.73C229.835 195.44 229.17 196.96 227.84 198.29C226.7 199.43 225.275 200 223.565 200H169.7C163.62 200 159.345 196.77 156.875 190.31L149.75 170.36H80.21L73.085 190.31ZM114.98 55.505L94.745 114.785H135.215L114.98 55.505ZM451.169 0.499986C453.259 0.499986 455.064 1.25999 456.584 2.77999C458.104 4.29999 458.864 6.10499 458.864 8.19499V192.305C458.864 194.395 458.104 196.2 456.584 197.72C455.064 199.24 453.259 200 451.169 200H392.459C390.369 200 388.564 199.24 387.044 197.72C385.524 196.2 384.764 194.395 384.764 192.305V131.6H327.764V192.305C327.764 194.395 327.004 196.2 325.484 197.72C323.964 199.24 322.159 200 320.069 200H261.359C259.269 200 257.464 199.335 255.944 198.005C254.424 196.485 253.664 194.585 253.664 192.305V8.19499C253.664 6.10499 254.424 4.29999 255.944 2.77999C257.464 1.25999 259.269 0.499986 261.359 0.499986H320.069C322.159 0.499986 323.964 1.25999 325.484 2.77999C327.004 4.29999 327.764 6.10499 327.764 8.19499V66.62H384.764V8.19499C384.764 6.10499 385.524 4.29999 387.044 2.77999C388.564 1.25999 390.369 0.499986 392.459 0.499986H451.169ZM557.362 190.31C554.892 196.77 550.617 200 544.537 200H490.672C488.962 200 487.442 199.43 486.112 198.29C484.972 196.96 484.402 195.44 484.402 193.73L484.687 192.02L546.817 9.90498C547.577 7.43499 549.002 5.24999 551.092 3.34998C553.182 1.44999 556.032 0.499986 559.642 0.499986H638.872C642.482 0.499986 645.332 1.44999 647.422 3.34998C649.512 5.24999 650.937 7.43499 651.697 9.90498L713.827 192.02L714.112 193.73C714.112 195.44 713.447 196.96 712.117 198.29C710.977 199.43 709.552 200 707.842 200H653.977C647.897 200 643.622 196.77 641.152 190.31L634.027 170.36H564.487L557.362 190.31ZM599.257 55.505L579.022 114.785H619.492L599.257 55.505Z"
                    fill="#203533"
                  />
                </svg>
              </StyledAhaWrapper>
            ) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="meets-form-womens">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          <StyledButtonsWrapper iswomens={isWomens}>
            <Button
              btnData={firstBtn}
              variant="green"
              hasClampWidth="25.938vw"
              hasBasicWidth="300px"
              haswidth="498px"
              hasheight="88px"
              hasfontsize="clamp(16px, 1.042vw, 20px)"
              className="second-section-womens-youth"
            />
            <Button
              btnData={secondBtn}
              hasClampWidth="25.938vw"
              hasBasicWidth="300px"
              haswidth="498px"
              hasheight="88px"
              hasfontsize="clamp(16px, 1.042vw, 20px)"
              className="second-section-womens-youth"
            />
          </StyledButtonsWrapper>
        </StyledRightWrapper>
      </StyledMeetsFormwomens>
    </Container>
  );
};

export default MeetsFormwomens;
