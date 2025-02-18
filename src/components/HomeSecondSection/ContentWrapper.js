/** @format */

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import CustomButton from "../CustomButton/CustomButton";
import Button from "../Button/Button";

import {
  StyledContent,
  StyledContentWrapper,
  StyledIconsWrapper,
  StyledMobileText,
  StyledDesktopText,
} from "./StyledHomeSecondSection";
import { StyledText } from "../Text/StyledText";

const ContentWrapper = ({ data }) => {
  const [isAdult, setIsAdult] = useState(false);

  const handleChange = useCallback(
    (adult) => {
      setIsAdult(adult);
    },
    [setIsAdult]
  );

  const handleOnKeyUp = useCallback(
    (e, adult) => {
      if (e.keyCode === 13) {
        setIsAdult(adult);
      }
    },
    [setIsAdult]
  );

  return (
    <div>
      <StyledIconsWrapper isadult={isAdult}>
        <div
          onClick={() => handleChange(false)}
          tabIndex="0"
          onKeyUp={(e) => handleOnKeyUp(e, false)}
        >
          <CustomButton
            onClick={() => handleChange(false)}
            type="button"
            className={isAdult ? "button" : "button active"}
            bgColor={isAdult ? "var(--btnGrey)" : "var(--normalGreen)"}
            tabIndex="-1"
            imageSize="47px"
          >
            <StaticImage src="../../images/brother.png" alt="youth" />
            <StyledMobileText>
              <StyledText
                className={isAdult ? "text" : "text active"}
                hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
                hasdeclaredfontweight="700"
                hasdeclaredfontcolor={
                  isAdult ? "#5B5C5E" : "var(--normalBlack)"
                }
              >
                {data.tekstDoIkonkiMlodziez}
              </StyledText>
            </StyledMobileText>
          </CustomButton>
          <StyledDesktopText>
            <StyledText
              className={isAdult ? "text" : "text active"}
              hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
              hasdeclaredfontweight="700"
              hasdeclaredfontcolor={isAdult ? "#5B5C5E" : "var(--normalBlack)"}
            >
              {data.tekstDoIkonkiMlodziez}
            </StyledText>
          </StyledDesktopText>
        </div>
        <div
          onClick={() => handleChange(true)}
          tabIndex="0"
          onKeyUp={(e) => handleOnKeyUp(e, true)}
        >
          <CustomButton
            className={isAdult ? "active button" : "button"}
            bgColor={isAdult ? "var(--normalGreen)" : "var(--btnGrey)"}
            onClick={() => handleChange(true)}
            type="button"
            tabIndex="-1"
            imageHeight="57px !important"
          >
            <svg
              width="53"
              height="70"
              viewBox="0 0 53 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.914 1.25155C17.6971 2.10075 14.662 4.3501 13.3135 6.14282C10.829 9.44612 9.36869 14.7594 9.31019 20.7094C9.29593 22.1902 9.05753 23.7673 8.7621 24.3368C8.06593 25.6793 8.08056 27.7207 8.79793 29.2494C9.23998 30.1917 9.32006 31.0413 9.12737 32.7417C8.79172 35.7044 7.61401 39.8545 6.52734 41.9044C6.04726 42.8104 5.6542 43.8365 5.6542 44.1844C5.6542 44.878 9.98149 47.0427 12.327 47.5223C13.0813 47.6767 13.6982 47.9375 13.6982 48.1027C13.6982 48.2675 12.3409 48.7254 10.6817 49.12C9.02243 49.5145 7.00778 50.0925 6.20412 50.4045C4.41178 51.1001 2.46367 53.0822 1.71924 54.9677C1.16969 56.3593 -0.276392 68.991 0.046463 69.5778C0.137872 69.7438 0.513013 69.8801 0.879745 69.8801C1.6059 69.8801 1.98506 68.8269 1.99274 66.788C1.99712 65.6965 2.17738 65.4438 3.22456 65.063C6.51125 63.8671 8.99976 59.8106 9.71019 54.4896C9.9559 52.6498 10.3204 51.3089 10.6078 51.1872C10.9102 51.059 11.5197 51.8179 12.232 53.2088C15.5318 59.6546 21.7363 62.7995 29.1462 61.7834C34.0505 61.1108 38.3303 57.9525 40.7544 53.2173C41.4696 51.8203 42.0802 51.059 42.3829 51.1872C42.6703 51.3089 43.0349 52.6498 43.2806 54.4896C43.991 59.8106 46.4795 63.8671 49.7662 65.063C50.8134 65.4438 50.9937 65.6965 50.998 66.788C51.0057 68.8269 51.3849 69.8801 52.111 69.8801C52.4778 69.8801 52.8529 69.7438 52.9443 69.5778C53.3045 68.9232 51.8229 56.3267 51.2214 54.929C49.8624 51.7724 47.206 50.1131 41.5778 48.9047C40.3211 48.6347 39.2926 48.2764 39.2926 48.1083C39.2926 47.9403 39.9098 47.6767 40.6637 47.5223C42.9815 47.0488 47.3366 44.8776 47.3366 44.1965C47.3366 43.8551 47.0199 43.0107 46.6327 42.3195C45.6353 40.5381 44.1504 35.4227 43.8572 32.7558C43.67 31.0514 43.7526 30.1881 44.1928 29.2494C44.9084 27.7239 44.9417 25.8655 44.2791 24.4174C44.0049 23.8189 43.6693 21.7875 43.5329 19.9033C43.0831 13.6857 41.9563 9.83303 39.6363 6.58253C38.4323 4.89541 35.682 3.17807 33.6253 2.82944C32.8209 2.69321 31.3532 2.12614 30.3642 1.56954C28.7963 0.687295 28.1155 0.561547 25.0625 0.589356C22.9016 0.609105 20.929 0.862616 19.914 1.25155ZM27.5923 2.59689C28.4972 2.82057 29.6501 3.33324 30.1543 3.73547C30.6581 4.1377 31.8922 4.59918 32.8966 4.7604C37.7068 5.53383 40.4429 9.58476 41.4901 17.4851C42.0524 21.7255 41.9928 22.1954 40.8531 22.5106C39.5624 22.8677 38.5606 21.5558 37.2531 17.7967C36.6849 16.1627 35.8812 14.6872 35.2311 14.0843C34.2033 13.1311 32.3284 12.4741 31.2165 12.6781C30.9324 12.7301 30.0885 12.4725 29.3408 12.1062C27.3181 11.1143 24.7842 11.2533 22.5538 12.4786C20.6372 13.5313 20.4021 13.7897 17.209 18.352C14.7044 21.931 13.6031 22.8544 12.2345 22.5227C11.2294 22.2793 11.1395 22.1188 11.146 20.5768C11.1874 10.9398 15.1885 4.42588 22.1078 2.72989C24.6376 2.11002 25.5382 2.08825 27.5923 2.59689ZM28.9762 14.2648C29.8607 14.8593 30.5349 15.0088 31.5364 14.8323C33.4187 14.5006 34.584 15.6013 35.5993 18.6709C36.0417 20.0085 36.9738 21.9262 37.6707 22.9326C38.9361 24.7604 38.9372 24.7652 38.5672 27.3184C37.8301 32.4052 36.1573 35.9185 32.9657 39.0811C28.1726 43.8317 24.5934 43.7434 19.6829 38.7542C16.8061 35.831 15.1399 32.2295 14.436 27.4132L14.0751 24.9417L16.0042 22.9144C17.0653 21.7996 18.722 19.67 19.6851 18.1816C22.5674 13.7296 26.0164 12.2758 28.9762 14.2648ZM19.3655 21.191C17.5161 22.347 18.0913 23.7008 20.1374 23.0087C21.0299 22.7065 21.7374 22.698 22.4171 22.9809C23.5732 23.4618 24.3016 23.2808 24.3016 22.5122C24.3016 21.0367 21.0185 20.1577 19.3655 21.191ZM29.8695 21.1282C28.8706 21.5707 28.4055 22.6855 29.0398 23.1176C29.2914 23.2889 29.9733 23.2308 30.5558 22.9882C31.339 22.6625 31.9159 22.6734 32.7744 23.0305C34.8132 23.8789 35.5639 22.1595 33.588 21.1669C32.5163 20.6288 31.0325 20.6135 29.8695 21.1282ZM12.1936 25.2436C12.3614 25.7422 12.5837 27.0121 12.6879 28.0649C12.9091 30.3053 12.3844 30.583 10.9395 28.9898C9.90251 27.8468 9.74822 25.9271 10.6162 24.9699C11.4049 24.101 11.8338 24.1755 12.1936 25.2436ZM42.6692 25.3149C43.549 26.7316 42.1054 29.9793 40.5961 29.9793C40.1416 29.9793 40.0805 29.623 40.2674 28.0649C40.6151 25.163 40.9833 24.3057 41.7489 24.6173C42.1073 24.7632 42.5215 25.0771 42.6692 25.3149ZM20.137 25.3738C19.8196 26.2854 20.5864 27.2249 21.5271 27.0766C22.0686 26.9916 22.2906 26.6635 22.2906 25.9489C22.2906 25.1614 22.0811 24.9147 21.3319 24.8188C20.6982 24.7378 20.2931 24.926 20.137 25.3738ZM30.6497 25.3444C30.3294 26.2637 30.7773 27.158 31.558 27.158C32.4647 27.158 33.1514 26.229 32.8611 25.3955C32.5744 24.5717 30.9316 24.5338 30.6497 25.3444ZM14.5878 34.561C15.1775 35.9201 16.5348 38.0465 17.6042 39.2854C19.3717 41.3341 19.5483 41.7061 19.5483 43.3839C19.5483 46.0859 19.3099 46.5043 17.7724 46.501C16.0817 46.4974 10.9007 45.138 9.22902 44.2593L7.95441 43.5895L8.97161 40.9153C9.95992 38.3173 10.5186 36.1232 10.9395 33.1842C11.1318 31.8405 11.2159 31.7643 12.3296 31.9215C13.3717 32.069 13.6452 32.3887 14.5878 34.561ZM42.2502 34.4603C42.4553 35.8749 43.1603 38.5108 43.8166 40.3176L45.01 43.6028L43.7486 44.2662C42.0882 45.1392 36.9032 46.4974 35.2183 46.501C33.6808 46.5043 33.4424 46.0859 33.4424 43.3839C33.4424 41.7061 33.619 41.3341 35.3865 39.2854C36.456 38.0465 37.8132 35.9148 38.403 34.5489C39.3237 32.4165 39.6305 32.0457 40.5723 31.9256C41.1756 31.849 41.716 31.8091 41.7731 31.8369C41.8305 31.8647 42.0451 33.0452 42.2502 34.4603ZM22.2346 34.2269C21.7264 35.6867 24.8943 36.7842 28.0914 36.2558C30.0976 35.9241 31.0852 35.172 30.7561 34.2269C30.5609 33.6659 30.3049 33.5901 29.5086 33.8577C28.2179 34.2906 24.7729 34.2906 23.4822 33.8577C22.6858 33.5901 22.4299 33.6659 22.2346 34.2269ZM26.525 44.5935C27.838 44.5814 29.0951 44.2771 30.049 43.7402L31.532 42.9063L31.7825 45.4862C31.9203 46.9053 32.2271 48.228 32.4636 48.4263C32.7002 48.6242 34.2399 49.1155 35.8849 49.5182C39.9354 50.5096 40.0038 50.5705 39.1116 52.3963C36.4699 57.8038 30.4029 60.8137 24.1213 59.8331C19.73 59.148 15.775 56.2771 13.8814 52.4011C12.9866 50.5697 13.0539 50.51 17.1059 49.5182C18.7509 49.1155 20.2906 48.6242 20.5271 48.4263C20.7637 48.228 21.0705 46.9053 21.2083 45.4862L21.4588 42.9063L22.9718 43.7596C23.9988 44.3391 25.1392 44.6068 26.525 44.5935ZM8.01767 53.6578C7.41474 57.6305 6.70614 59.472 5.09698 61.2454C2.72218 63.8635 2.24356 63.6862 2.56093 60.3079C3.0337 55.2732 4.88564 52.2774 7.59024 52.1718C8.1482 52.1504 8.21218 52.3733 8.01767 53.6578ZM48.0086 53.4623C49.2865 54.7561 50.1461 57.1807 50.4346 60.3079C50.7447 63.668 50.2664 63.8611 47.9527 61.3107C46.3958 59.5945 45.5263 57.354 44.961 53.6018L44.7248 52.0339L45.9216 52.2979C46.5801 52.443 47.519 52.967 48.0086 53.4623Z"
                fill="black"
              />
            </svg>
            <StyledMobileText>
              <StyledText
                className={isAdult ? "text active" : "text"}
                hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
                hasdeclaredfontweight="700"
                hasdeclaredfontcolor={
                  isAdult ? "var(--normalBlack)" : "#5B5C5E"
                }
              >
                {data.tekstDorosli}
              </StyledText>
            </StyledMobileText>
          </CustomButton>
          <StyledDesktopText>
            <StyledText
              className={isAdult ? "text active" : "text"}
              hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
              hasdeclaredfontweight="700"
              hasdeclaredfontcolor={isAdult ? "var(--normalBlack)" : "#5B5C5E"}
            >
              {data.tekstDorosli}
            </StyledText>
          </StyledDesktopText>
        </div>
      </StyledIconsWrapper>
      <AnimatePresence key={isAdult}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={isAdult}
        >
          {isAdult ? (
            <StyledContent>
              <StyledContentWrapper>
                {data.opisDoDorosli ? parse(data.opisDoDorosli) : null}
              </StyledContentWrapper>
              <Button
                btnData={data.przyciskDorosli}
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
                {data.opisDoMlodziez ? parse(data.opisDoMlodziez) : null}
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
