import styled from "styled-components";
import { Link } from "gatsby";

export const StyledMeetSomebody = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  transition: background-color 250ms;

  &:hover {
    background-color: var(--hoverGrey);
  }
`;

export const StyledIcon = styled.div`
  margin-right: 24px;
`;

export const StyledTitle = styled.div`
  width: calc(100% - 241px - 106px);
`;

export const StyledAvatarWrapper = styled.div`
  width: clamp(120px, 9.948vw, 191px);
  height: clamp(120px, 9.948vw, 191px);
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
