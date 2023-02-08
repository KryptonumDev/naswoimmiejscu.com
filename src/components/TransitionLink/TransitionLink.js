import { Link as ALink } from 'gatsby'
import React from 'react'


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
    <ALink
      aria-label={arialabel ? arialabel : 'link'}
      className={className}
      onClick={onClick}
      target={target}
      to={to}
      partiallyActive={partialyActive}
      activeClassName={activeClassName}
    >
      {children}
    </ALink>
  )
}
