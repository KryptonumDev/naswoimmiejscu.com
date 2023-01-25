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

export const StyledTitle = styled.div``;

export const StyledAvatarWrapper = styled.div`
  width: 191px;
  height: 191px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
