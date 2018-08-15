import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageWrapper } from 'components/Styled'
import Routes from 'utils/Routes'
import { NavContainer, StyledLink, Logo, LinkContainer } from './Styled'

const Navbar = () => (
  <NavContainer>
    <PageWrapper flex>
      <Logo />
      <LinkContainer>
        <NavLink to={Routes.primary.home.path}>
          <StyledLink>Home</StyledLink>
        </NavLink>
        <NavLink to={Routes.primary.about.path}>
          <StyledLink>About</StyledLink>
        </NavLink>
      </LinkContainer>
    </PageWrapper>
  </NavContainer>
)

export default Navbar
