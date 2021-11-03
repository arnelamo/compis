import styled from '@emotion/styled'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`

const Campaign = () => {
  return (
    <Container>
       Nice campaign - 20% off
    </Container>
  )
}

export default Campaign
