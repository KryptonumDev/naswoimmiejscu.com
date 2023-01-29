import React from "react"
// import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const TRANSITION_LENGTH = 2

const exitTransition = {
    length: TRANSITION_LENGTH,
}

const entryTransition = {
    length: TRANSITION_LENGTH,
    delay: TRANSITION_LENGTH - .1,
}

export const Link = ({ arialabel, className = 'transitionLink', onClick = () => { }, to = '/', activeClassName = 'activeLink', children }) => {

    return (
        <AniLink
            fade 
            arialabel={arialabel}
            className={className}
            onClick={onClick}
            to={to}
            activeClassName={activeClassName}
            exit={exitTransition}
            entry={entryTransition}
        >
            {children}
        </AniLink>
    )
}