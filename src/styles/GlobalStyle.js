import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}
`

export default GlobalStyle