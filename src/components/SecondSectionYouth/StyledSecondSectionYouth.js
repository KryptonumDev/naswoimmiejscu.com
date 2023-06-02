import styled from 'styled-components'

export const StyledSecondSectionYouth = styled.div`
  gap: clamp(100px, 3.75vw, 200px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  margin: 71px auto 0;
  padding: 75px 128px 75px 163px;
  background-color: var(--grey);

  @media only screen and (max-width: 1167px) {
    padding: 75px 22px;
  }

  @media only screen and (max-width: 725px) {
    flex-direction: column;
    gap: 20px;
    padding: 24px 22px;
    margin-top: 27px;
  }
`

export const StyledLeftWrapper = styled.div`
  font: 300 1.354vw/1.33em Roboto;
  color: var(--normalBlack);
  position: relative;
  z-index: 1;

  strong {
    font-weight: 600;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 1763px) {
    font-size: 1.248vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 1.334vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 1.334vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: 3.409vw;
  }

  @media only screen and (max-width: 420px) {
    font-size: clamp(15px, 4.167vw, 18px);
  }
`

export const StyledRightWrapper = styled.div`
  font: 300 1.354vw/1.33em Roboto;
  color: var(--normalBlack);
  position: relative;
  z-index: 3;

  strong {
    font-weight: 600;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 1763px) {
    font-size: 1.248vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 1.334vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 1.334vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: 3.409vw;
  }

  @media only screen and (max-width: 420px) {
    font-size: clamp(15px, 4.167vw, 18px);
  }
`
