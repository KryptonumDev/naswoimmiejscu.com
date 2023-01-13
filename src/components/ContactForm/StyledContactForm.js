import { ErrorMessage } from "formik";
import styled from "styled-components";

export const StyledContactForm = styled.div`
  width: 100%;
  max-width: 788px;
  background-color: var(--normalGreen);
  padding: 90px 130px 119px 81px;

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 36px Roboto;
  color: var(--arrowBlack);
  position: relative;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  padding-left: 20px;
  font: 500 18px Roboto;
  color: var(--errorColor);
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
      border: 2px solid ${({ iserror }) => (iserror ? "#D63D3D" : "#3E635D")};
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

  label {
    font: 700 20px Roboto;
    padding-left: 20px;
    color: ${({ iserror }) =>
      iserror ? "var(--errorColor)" : "var(--arrowBlack)"};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: 1px solid
      ${({ iserror }) => (iserror ? "var(--errorColor)" : "var(--arrowBlack)")};
    height: 66px;
    border-radius: 32px;
  }

  textarea {
    border-radius: 32px;
    width: 100%;
    background-color: transparent;
    border: 1px solid
      ${({ iserror }) => (iserror ? "var(--errorColor)" : "var(--arrowBlack)")};
    resize: none;
    height: 226px;
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
`;

export const StyledIconTitle = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
`;
