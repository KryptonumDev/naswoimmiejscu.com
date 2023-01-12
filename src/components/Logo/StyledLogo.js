import styled from "styled-components"

export const StyledLogo = styled.div`
    max-width: ${({ hasmaxwidth }) => hasmaxwidth ? hasmaxwidth : "unset"};
    margin: ${({ hasdeclaredmargin }) => hasdeclaredmargin ? hasdeclaredmargin : "0"};
`