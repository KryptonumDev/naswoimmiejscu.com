import React from "react"
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink";

const TRANSITION_LENGTH = .2

const exitTransition = {
    length: TRANSITION_LENGTH,
}

const entryTransition = {
    delay: TRANSITION_LENGTH,
}

export const Link = ({ arialabel, className = 'transitionLink', onClick = () => { }, to = '/', activeClassName = 'activeLink', children }) => {

    return (
        <TransitionLink
            arialabel={arialabel}
            className={className}
            onClick={onClick}
            to={to}
            activeClassName={activeClassName}
            exit={exitTransition}
            entry={entryTransition}
        >{children}
        </TransitionLink>
    )
}