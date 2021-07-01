import Image from 'next/image'
import CustomCard from '../../components/CustomCard'

export const getStaticProps =  async () => {

    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    const data = await res.json()

    if (!data) {
        return {
          notFound: true,
        }
      }

    return {
        props: { products: data}
    }
}

const Products = ({products}) => {

    return (
        <div >
            <h1 className='text-center py-3'>Products here</h1>
            <div className="container">
            <div className="row">
                {products.map((prod) => {
                    return (
                        <div className="col-3" key={prod.id}>  
                            <CustomCard name={prod.name} image_link={prod.image_link} rating={prod.rating} price={prod.price} price_sign={prod.price_sign}/>
                        </div>
                                
                    )
                })}
                </div>
            
            </div>
        </div>
    );
};

export default Products;