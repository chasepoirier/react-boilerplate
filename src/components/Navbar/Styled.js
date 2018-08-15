import styled from 'styled-components'

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled.div`
  margin: 0px 15px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`

const Logo = styled.div`
  background-color: #222;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

export { NavContainer, StyledLink, Logo, LinkContainer }
