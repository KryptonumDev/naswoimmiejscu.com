import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledCircle } from '../Circle/StyledCircle'
import parse from 'html-react-parser'

import { Link } from '../TransitionLink/TransitionLink'
import Image from '../Image/Image'

import {
  StyledRecommendationCard,
  StyledAvatarWrapper,
  StyledDescriptionWrapper,
  StyledImage,
  StyledTextContent,
  StyledNameWrapper,
  StyledDescImageWrapper
} from './StyledRecommendationCard'

const RecommendationCard = ({
  slug,
  avatar,
  avatarIcon,
  name,
  nameDesc,
  desc,
  isDiffBg,
  recDif
}) => {
  return (
    <Link className='transitionLink' to={`/sukcesy/${slug}`}>
      <StyledRecommendationCard hasdeclaredbg={isDiffBg ? 'true' : null}>
        <StyledAvatarWrapper recdiff={recDif}>
          <StyledImage>
            {avatar ? (
              <Image imageDesktop={avatar} />
            ): (
              <img src={avatarIcon.sourceUrl} alt="" />
            )}
            <StyledCircle
              hasdeclaredwidth='27px'
              hasdeclaredheight='27px'
              hasdeclaredbg='var(--lightGreen)'
              className='avatar-circle'
            />
          </StyledImage>
          <StyledTextContent>
            <StyledNameWrapper>{name ? parse(name) : null}</StyledNameWrapper>
            <StyledDescImageWrapper>
              {nameDesc ? parse(nameDesc) : null}
            </StyledDescImageWrapper>
          </StyledTextContent>
        </StyledAvatarWrapper>
        <StyledDescriptionWrapper recdiff={recDif}>
          {desc ? parse(desc) : null}
          <p className='sign'>{name}</p>
        </StyledDescriptionWrapper>
      </StyledRecommendationCard>
    </Link>
  )
}

export default RecommendationCard
