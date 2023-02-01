import React from 'react'
// import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Link = ({
  partialyActive = false,
  arialabel,
  className = 'transitionLink',
  target,
  onClick = () => { },
  to = '/',
  activeClassName = 'activeLink',
  children
}) => {

  if (to.includes('#'))
    return (
      <a
        href={to}
        aria-label={arialabel ? arialabel : 'link'}
        className={className}
        onClick={onClick}
        target={target}
      >
        {children}
      </a>
    )

  return (
    <AniLink
      fade
      duration='.5'
      aria-label={arialabel ? arialabel : 'link'}
      className={className}
      onClick={onClick}
      target={target}
      to={to}
      partiallyActive={partialyActive}
      activeClassName={activeClassName}
    >
      {children}
    </AniLink>
  )
}
