import React from 'react'
import SecondGreenCircle from '../SecondGreenCircle/SecondGreenCircle'
import { Link } from '../TransitionLink/TransitionLink'
import {
  StyledNav,
  StyledMobileWrapper,
  StyledGreenCircle,
  StyledFooterNav
} from './StyledNav'

//openMenu

const Nav = ({ isOpen, isFooter, openMenu }) => {
  return !isFooter ? (
    <StyledNav isopen={isOpen}>
      <StyledGreenCircle>
        <SecondGreenCircle />
      </StyledGreenCircle>
      <Link onClick={openMenu} to='/'>
        STRONA GŁÓWNA
      </Link>
      <div className='flex-wrapper'>
        <Link onClick={openMenu} to='/mlodziez/'>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link onClick={openMenu} to='/kobiety/'>
          KOBIETY
        </Link>
      </div>
      <Link onClick={openMenu} to='/o-mnie/'>
        O MNIE
      </Link>
      <Link partialyActive={true} onClick={openMenu} to='/blog/'>
        BLOG
      </Link>
      <Link onClick={openMenu} to='/spotkajmy-sie/'>
        SPOTKAJMY SIĘ
      </Link>
      <Link onClick={openMenu} to='/opinie/'>
        OPINIE
      </Link>
      <StyledMobileWrapper>
        <Link onClick={openMenu} to='/polityka-prywatnosci/'>
          Polityka prywatności
        </Link>
      </StyledMobileWrapper>
    </StyledNav>
  ) : (
    <StyledFooterNav>
      <Link onClick={openMenu} to='/'>
        STRONA GŁÓWNA
      </Link>
      <div className='flex-wrapper'>
        <Link onClick={openMenu} to='/mlodziez/'>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link onClick={openMenu} to='/kobiety/'>
          KOBIETY
        </Link>
      </div>
      <Link onClick={openMenu} to='/o-mnie/'>
        O MNIE
      </Link>
      <Link onClick={openMenu} to='/blog/'>
        BLOG
      </Link>
      <Link onClick={openMenu} to='/spotkajmy-sie/'>
        SPOTKAJMY SIĘ
      </Link>
      <Link onClick={openMenu} to='/opinie/'>
        OPINIE
      </Link>
    </StyledFooterNav>
  )
}

export default Nav
