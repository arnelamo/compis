import React, { useState, useEffect, useContext } from 'react'
import Product from '../components/Product'
import { Cart } from '../Context'
import { ProductContainer } from '../styles'
import styled from '@emotion/styled'

const TotalsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0 10px;
  text-align: center;
  font-weight: bold;
`

const CartPage = () => {
  const [total, setTotal] = useState(null)
  const { cart, setCart } = useContext(Cart)

  useEffect(() =>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])

  return (
    <div>
      <TotalsWrapper>Total: {total} NOK</TotalsWrapper>
      <ProductContainer>
        {cart.map(product => (
          <Product key={product.id} cart={cart} setCart={setCart} product={product} />
        ))}
      </ProductContainer>
    </div>
  )
}

export default CartPage
