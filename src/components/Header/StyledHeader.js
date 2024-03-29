import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  max-width: 1920px;
  margin: 0 auto;
  padding: clamp(40px, 4.167vw, 80px) clamp(32px, 6.667vw, 128px) 0;

  @media only screen and (max-width: 1472px) {
    padding-left: clamp(32px, 3vw, 60px) 0;
    padding-right: clamp(32px, 3vw, 60px) 0;
  }

  @media only screen and (max-width: 1167px) {
    padding-left: 22px;
    padding-top: 24px;
    height: 72px;
  }
  a {
    z-index: 99;
  }
  .logo {
    z-index: 99;
    width: clamp(210px, ${320/7.68}vw, 330px);
    height: auto;
  }
`