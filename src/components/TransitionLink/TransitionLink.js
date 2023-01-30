import React from 'react'
// import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const TRANSITION_LENGTH = 2

const exitTransition = {
  length: TRANSITION_LENGTH
}

const entryTransition = {
  length: TRANSITION_LENGTH,
  delay: TRANSITION_LENGTH - 0.1
}

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
      aria-label={arialabel ? arialabel : 'link'}
      className={className}
      onClick={onClick}
      target={target}
      to={to}
      partiallyActive={partialyActive}
      activeClassName={activeClassName}
      exit={exitTransition}
      entry={entryTransition}>
      {children}
    </AniLink>
  )
}
