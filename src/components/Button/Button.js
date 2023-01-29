import React from 'react'
import { Link } from '../TransitionLink/TransitionLink'

import { StyledButton, StyledLink } from './StyledButton'

const Button = ({
  btnData,
  text,
  variant,
  disabled,
  haswidth,
  hasheight,
  hasfontsize,
  className,
  hasClampWidth,
  hasClampHeight,
  hasBasicWidth,
  hasBasicHeight,
  tabIndex = 0,
  ariaLabel,
  noReferer,
  noOpener
}) => {
  console.log(btnData)
  return text ? (
    <StyledButton
      aria-label={ariaLabel}
      variant={variant}
      hasdeclaredwidth={haswidth}
      hasdeclaredheight={hasheight}
      hasfontsize={hasfontsize}
      className={className}
      tabIndex={tabIndex}>
      {text}
    </StyledButton>
  ) : (
    <Link
      arialabel={ariaLabel}
      to={btnData.url}
      target={btnData.target}
      className='transitionLink'
      rel={noReferer || noOpener ? `${noReferer} ${noOpener}` : null}>
      <StyledLink
        variant={variant}
        disabled={disabled}
        hasdeclaredwidth={haswidth}
        hasdeclaredheight={hasheight}
        hasfontsize={hasfontsize}
        className={className}
        hasclampwidth={hasClampWidth}
        hasclampheight={hasClampHeight}
        hasbasicwidth={hasBasicWidth}
        hasbasicheight={hasBasicHeight}
        tabIndex={tabIndex}>
        {btnData.title}
      </StyledLink>
    </Link>
  )
}

export default Button
