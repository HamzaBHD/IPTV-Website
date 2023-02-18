import './Products.css'
import TopPage from '../components/TopPage'
import OurProducts from '../components/OurProducts'

const Products = () => {
  return (
    <div className='wrapper'>
      <TopPage
        topPageClass='top-page-product'
        title='Choose your Plan.'
        paragraph="Are you tired of paying for services you don't use? With Choose Your Plan,
                you can customize your subscription plan to fit your needs. 
                We offer a variety of products,
                and you can pick and choose which ones you want."
        isTrue={false}
        backgoundClass='background-img-black'
        contentClass='top-page-content'
        aboutPage={false}
        contactPage={false}
      />
      <OurProducts isTrue={false} productsClass='products' />
    </div>
  )
}

export default Products
