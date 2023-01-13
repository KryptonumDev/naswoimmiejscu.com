import styled from "styled-components";

export const StyledHomeFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 160px auto 0;
  padding: 0 125px 0 180px;
  max-width: 1920px;
`;

export const StyledTextWrapper = styled.div`
    width: 50%;
    font: 700 64px Roboto;
    display: flex;
    align-items: center;
    padding-left: 45px;
    
    p {
        max-width: 475px;

        strong {
            color: var(--nromalBrown);
            font-weight: 700;
        }
    }
`

export const StyledFAQWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 55px;
    padding-left: 20px;
`