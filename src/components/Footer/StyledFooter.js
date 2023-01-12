import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  overflow-y: hidden;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
`;

export const StyledLeftWrapper = styled.div`
    width: 50%;
`;

export const StyledRightWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const StyledRightWrapperContent = styled.div`
    display: flex;
    gap: 29px;
    align-items: center;
    align-self: flex-end;
`

export const StyledCopyright = styled.div`
  margin-top: 62px;
`;

export const StyledTopText = styled.div`
  font: 700 20px Roboto;
`;

export const StyledBottomText = styled.div`
  margin-top: 11px;
  font: 300 13px Roboto;
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 982px;
  height: 982px;
  transform: translate(-50%, 91%);
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 36px;
  align-self: flex-end;
  padding-right: 70px;

  a {
    font: 600 14px Roboto;
    color: var(--normalBlack);
    text-decoration: none;

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }
  }
`;
