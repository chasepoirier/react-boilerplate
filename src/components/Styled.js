import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 1200px;
  ${props =>
    props.flex &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`

const Header = styled.h1`
  font-size: 28px;
  margin: 0;
  margin-top: 50px;
  padding: 0;
`

export { PageWrapper, Header }
