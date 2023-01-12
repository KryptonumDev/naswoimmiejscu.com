import styled from "styled-components"
import Image from "../Image/Image";

export const StyledLogo = styled.div`
    max-width: ${({ hasmaxwidth }) => hasmaxwidth ? hasmaxwidth : "unset"};
    margin: ${({ hasdeclaredmargin }) => hasdeclaredmargin ? hasdeclaredmargin : "0"};
`

export const StyledImage = styled(Image)``