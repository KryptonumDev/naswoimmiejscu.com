import { ErrorMessage } from "formik";
import styled from "styled-components";

export const StyledContactForm = styled.div`
  width: 100%;
  max-width: 788px;
  background-color: var(--normalGreen);
  padding: 90px 130px 119px 81px;
  max-height: 1130px;

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media only screen and (max-width: 1681px) {
    padding: 90px 81px 119px 81px;
  }

  @media only screen and (max-width: 1386px) {
    padding: 60px 34px;
  }

  @media only screen and (max-width: 992px) {
    max-width: unset;
    max-height: unset;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 clamp(24px, 1.875vw, 36px) Roboto;
  color: var(--arrowBlack);
  position: relative;

  @media only screen and (max-width: 992px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  padding-left: 20px;
  font: 500 20px Roboto;
  color: var(--errorColor);
  margin-top: 10px;
`;

export const StyledCustomCheckbox = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  label {
    font: 400 12px Roboto;
    color: ${({ iserror }) =>
      iserror ? "var(--errorColor)" : "var(--arrowBlack)"};
    cursor: pointer;
    position: relative;
    padding-left: 55px;
    max-width: 513px;

    @media only screen and (max-width: 1681px) {
      max-width: unset;
    }

    svg {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 2px;
      top: 2px;
      z-index: 1;
      cursor: pointer;
    }

    &:after {
      content: "";
      border: 2px solid
        ${({ iserror }) => (iserror ? "var(--errorColor)" : "#3E635D")};
      width: 43px;
      height: 43px;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${({ value }) => (value ? "#3E635D" : "transparent")};
      cursor: pointer;
      border-radius: 13px;
    }
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;

    &:focus-visible + label {
      &:after {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #da9610;
        outline-offset: 4px;
      }
    }
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  max-width: 494px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: transparent;

  label {
    font: 700 20px Roboto;
    padding-left: 20px;
    color: ${({ iserror }) =>
      iserror ? "var(--errorColor)" : "var(--arrowBlack)"};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: ${({ iserror }) =>
      iserror ? "3px solid var(--errorColor)" : "1px solid var(--arrowBlack)"};
    height: 66px;
    border-radius: 32px;
    font: 700 20px Roboto;
    padding: 20px;
    color: var(--arrowBlack);

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--buttonBrownHover);
      outline-offset: 4px;
      background-color: transparent;
    }

    @media only screen and (max-width: 992px) {
      height: 60px;
    }
  }

  textarea {
    border-radius: 32px;
    width: 100%;
    background-color: transparent;
    color: var(--arrowBlack);
    border: ${({ iserror }) =>
      iserror ? "3px solid var(--errorColor)" : "1px solid var(--arrowBlack)"};
    resize: none;
    height: 226px;
    font: 700 20px Roboto;
    padding: 20px;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--buttonBrownHover);
      outline-offset: 4px;
    }
  }

  @media only screen and (max-width: 1681px) {
    max-width: unset;
  }
`;

export const StyledSubmit = styled.button`
  background-color: transparent;
  width: 301px;
  height: 80px;
  border: 1px solid var(--arrowBlack);
  border-radius: 45px;
  font: 700 20px Roboto;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 250ms, background-color 250ms;

  &:hover {
    color: var(--normalWhite);
    background-color: var(--buttonBrownHover);
    border: none;
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--buttonBrownHover);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const StyledIconTitle = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;

  @media only screen and (max-width: 1167px) {
    top: -20px;
    left: -10px;
  }
`;

export const StyledSuccessMessage = styled.div`
  width: 100%;
  text-align: center;
  font: 300 20px Roboto;
  color: var(--normalBlack);
`;
