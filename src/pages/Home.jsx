
import Product from '../components/Product'
import faker from 'faker'
import { ProductContainer } from '../styles'

  faker.seed(100)

  const productsArray= [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
  }))

const Home = () => {
  
  const content = productsArray.map(product => {
    return <Product product={product} key={product.id} />
  })

  return (
    <div>
      <ProductContainer>
        {content}
      </ProductContainer>
    </div>
  )
}

export default Home
