import styled from "styled-components";
import { Link } from "gatsby";

export const StyledBlogHomeCard = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 29px;
  text-decoration: none;
  color: var(--normalBlack);
  cursor: pointer;
  padding-left: clamp(30px, 3.6vw, 70px);
  align-items: center;
  margin-bottom: clamp(20px, 2.917vw, 56px);

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1167px) {
    padding-left: 20px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 16px;
    width: 246px;
    margin-right: 20px;
    padding-left: 0;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 35%;
  text-align: right;

  @media only screen and (max-width: 992px) {
    width: 100%;
    text-align: left;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 65%;
  max-width: 419px;
  min-height: 220px;
  background-color: red;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  font: 700 clamp(18px, 1.25vw, 24px) Roboto;

  @media only screen and (max-width: 432px) {
    font-size: 5.556vw;
  }
`;

export const StyledDesc = styled.div`
  font: 300 clamp(10px, 0.677vw, 13px) Roboto;
  margin-top: 10px;

  @media only screen and (max-width: 432px) {
    font-size: 11px;
  }
`;

export const StyledDate = styled.div`
  @media only screen and (max-width: 992px) {
    p {
      text-align: left;
    }
  }

  @media only screen and (max-width: 432px) {
    p {
      font-size: 13px;
    }
  }
`;
