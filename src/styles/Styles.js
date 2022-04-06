import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`
export const StyledRow = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const StyledInput = styled.input`
  padding: 5px;
  height: 20px;

  @media (max-width: 768px) {
    max-width: 150px;
  }
  
`
export const StyledSelect = styled.select`
  padding: 7.5px;

`
export const StyledOption = styled.option`

`
export const StyledButton = styled.button`
  width: 250px;
  margin-top: 5px;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  margin: 5px;
&:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}
&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
`
export const StyledBlock = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const StyledTitle = styled.h1`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`
export const StyledHistory = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  h4{
    text-align: center;
    margin: 5px 0;
  }
  p{
    margin: 0;
    padding: 10px;
  }
`