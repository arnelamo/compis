import { useContext } from 'react'
import styled from '@emotion/styled'
import { Cart } from '../Context'

export const ProductsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  @media screen and (min-width: 600px) {
    width: 250px;
  }
`

const Image = styled.img`
  object-fit: cover;
`

const ProductTitle = styled.h2`
  font-size: 1rem;
`

const Price = styled.p`
  font-size: 0.8rem;
  text-align: right;
`

const StyledButton = styled.button`
  padding: 4px;
  background-color: white;
  font-weight: bold;
`

const Product = ({ product }) => {
  const { cart, setCart } = useContext(Cart)
  return (
    <ProductsWrapper>
      <Image src={product.image} alt={product.name}/>
      <ProductTitle>{product.name}</ProductTitle>
      <Price>{product.price} NOK</Price>
      {cart.includes(product) ? 
      <StyledButton onClick={() => setCart(cart.filter(prod => prod.id !== product.id))}>Remove</StyledButton>
      :
      <StyledButton onClick={() => setCart([...cart, product])}>Add</StyledButton>
    }
    </ProductsWrapper>
  )
}

export default Product
