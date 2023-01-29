/** @format */

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser";

import CustomButton from "../CustomButton/CustomButton";
import Button from "../Button/Button";

import {
  StyledContent,
  StyledContentWrapper,
  StyledIconsWrapper,
} from "./StyledHomeSecondSection";
import { StyledText } from "../Text/StyledText";

const ContentWrapper = ({ data }) => {
    const [isWomens, setIsWomens] = useState(false);

    const handleChange = useCallback(
        (womens) => {
            setIsWomens(womens);
        },
        [setIsWomens]
    );

    const handleOnKeyUp = useCallback(
        (e, womens) => {
            if (e.keyCode === 13) {
                setIsWomens(womens);
            }
        },
        [setIsWomens]
    );

    return (
        <div>
            <StyledIconsWrapper iswomens={isWomens}>
                <div
                    onClick={() => handleChange(false)}
                    tabIndex="0"
                    onKeyUp={(e) => handleOnKeyUp(e, false)}
                >
                    <CustomButton
                        onClick={() => handleChange(false)}
                        type="button"
                        className={isWomens ? "button" : "button active"}
                        bgColor={
                            isWomens ? "var(--btnGrey)" : "var(--normalGreen)"
                        }
                        tabIndex="-1"
                        imageSize="47px"
                    >
                        <StaticImage
                            src="../../images/brother.png"
                            alt="youth"
                        />
                    </CustomButton>
                    <StyledText
                        className={isWomens ? "text" : "text active"}
                        hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
                        hasdeclaredfontweight="700"
                        hasdeclaredfontcolor={
                            isWomens ? "#5B5C5E" : "var(--normalBlack)"
                        }
                    >
                        {data.tekstDoIkonkiMlodziez}
                    </StyledText>
                </div>
                <div
                    onClick={() => handleChange(true)}
                    tabIndex="0"
                    onKeyUp={(e) => handleOnKeyUp(e, true)}
                >
                    <CustomButton
                        className={isWomens ? "active button" : "button"}
                        bgColor={
                            isWomens ? "var(--normalGreen)" : "var(--btnGrey)"
                        }
                        onClick={() => handleChange(true)}
                        type="button"
                        tabIndex="-1"
                        imageHeight="57px !important"
                    >
                        <StaticImage src="../../images/women.png" alt="youth" />
                    </CustomButton>
                    <StyledText
                        className={isWomens ? "text active" : "text"}
                        hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
                        hasdeclaredfontweight="700"
                        hasdeclaredfontcolor={
                            isWomens ? "var(--normalBlack)" : "#5B5C5E"
                        }
                    >
                        {data.tekstKobiety}
                    </StyledText>
                </div>
            </StyledIconsWrapper>
            <AnimatePresence key={isWomens}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={isWomens}
                >
                    {isWomens ? (
                        <StyledContent>
                            <StyledContentWrapper>
                                {data.opisDoKobiet
                                    ? parse(data.opisDoKobiet)
                                    : null}
                            </StyledContentWrapper>
                            <Button
                                btnData={data.przyciskKobiety}
                                variant="green"
                                haswidth="355px"
                                hasheight="88px"
                                hasClampHeight="4.583vw"
                                hasfontsize="clamp(16px, 1.042vw, 20px)"
                                hasClampWidth="18.490vw"
                                hasBasicWidth="277px"
                                hasBasicHeight="73px"
                                className="home-second-section"
                                ariaLabel="link"
                            />
                        </StyledContent>
                    ) : (
                        <StyledContent>
                            <StyledContentWrapper>
                                {data.opisDoMlodziez
                                    ? parse(data.opisDoMlodziez)
                                    : null}
                            </StyledContentWrapper>
                            <Button
                                btnData={data.przyciskMlodziez}
                                variant="green"
                                haswidth="355px"
                                hasheight="88px"
                                hasClampHeight="4.583vw"
                                hasfontsize="clamp(16px, 1.042vw, 20px)"
                                hasClampWidth="18.490vw"
                                hasBasicWidth="277px"
                                hasBasicHeight="73px"
                                className="home-second-section"
                                ariaLabel="link"
                            />
                        </StyledContent>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ContentWrapper;
