import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import { useLocation } from '@reach/router'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import WhiteCircle from '../WhiteCircle/WhiteCircle'
import Button from '../Button/Button'
import BigGreenCircle from '../BigGreenCircle/BigGreenCircle'
import SmallGreenCircle from '../SmallGreenCircle/SmallGreenCircle'

import {
  StyledFooter,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCopyright,
  StyledTopText,
  StyledBottomText,
  StyledCircleWrapper,
  StyledFooterLinks,
  StyledRightWrapperContent,
  StyledSmallGreenCircle,
  StyledMobileGreenCircle
} from './StyledFooter'
import { Link } from '../TransitionLink/TransitionLink'

const Footer = () => {
  const location = useLocation()
  const data = useStaticQuery(graphql`
    query footerData {
      wpPage(id: { eq: "cG9zdDoxOA==" }) {
        global {
          stopka {
            coopyrightDolnaLinia
            coopyrightGornaLinia
            tekstObokPrzycisku
            przycisk {
              target
              title
              url
            }
          }
        }
      }
    }
  `)
  const shortData = data.wpPage.global.stopka

  return (
    <Container as='div' className='footer'>
      <StyledFooter
        smallgap={
          location.pathname === '/kontakt/' ||
          location.pathname === '/spotkajmy-sie/' ||
          location.pathname === '/polityka-prywatnosci/' ||
          location.pathname === '/kobiety/' ||
          location.pathname === '/opinie/' ||
          location.pathname === '/mlodziez/' ||
          location.pathname.includes('/sukcesy/')
        }>
        <StyledLeftWrapper>
          <Logo
            hadDeclaredMargin='0 0 54px 0'
            isHeader='true'
            isFooter='true'
            hasMaxWidth='484px'
          />
          <Nav isFooter isOpen={false} />
          <StyledFooterLinks>
            <Link to='/polityka-prywatnosci'>Polityka Prywatno??ci</Link>
          </StyledFooterLinks>
          <StyledCopyright>
            <StyledTopText>
              {shortData.coopyrightGornaLinia
                ? parse(shortData.coopyrightGornaLinia)
                : null}
              {new Date().getFullYear()}
            </StyledTopText>
            <StyledBottomText>
              {shortData.coopyrightDolnaLinia
                ? parse(shortData.coopyrightDolnaLinia)
                : null}
            </StyledBottomText>
          </StyledCopyright>
          <StyledSmallGreenCircle>
            <SmallGreenCircle />
          </StyledSmallGreenCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledRightWrapperContent
            className={
              location.pathname === '/kontakt/' ||
              location.pathname === '/spotkajmy-sie/' ||
              location.pathname === '/polityka-prywatnosci/' ||
              location.pathname === '/kobiety/' ||
              location.pathname === '/opinie/' ||
              location.pathname.includes('/sukcesy/') ||
              location.pathname === '/mlodziez/'
                ? 'desctop'
                : ''
            }>
            {shortData.tekstObokPrzycisku
              ? parse(shortData.tekstObokPrzycisku)
              : null}
            <Button
              btnData={shortData.przycisk}
              variant='green'
              haswidth='355px'
              hasheight='88px'
              hasClampHeight='4.583vw'
              hasfontsize='clamp(20px, 1.242vw, 24px)'
              hasClampWidth='18.490vw'
              hasBasicWidth='277px'
              hasBasicHeight='73px'
              className='footer'
              ariaLabel='link'
            />
          </StyledRightWrapperContent>
          <StyledFooterLinks hideMobile>
            <Link to='/polityka-prywatnosci'>Polityka Prywatno??ci</Link>
          </StyledFooterLinks>
        </StyledRightWrapper>
        <StyledCircleWrapper>
          <WhiteCircle />
        </StyledCircleWrapper>
        <StyledMobileGreenCircle
          difftop={
            location.pathname === '/kobiety/' ||
            location.pathname === '/mlodziez/'
              ? 'true'
              : 'false'
          }>
          <BigGreenCircle />
        </StyledMobileGreenCircle>
      </StyledFooter>
    </Container>
  )
}

export default Footer
