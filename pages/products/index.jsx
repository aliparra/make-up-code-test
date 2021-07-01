import Image from 'next/image'

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
            
            {products.map((prod) => {
                return (
                    <div key={prod.id}>
                        <div className="row">
                        <div className="col-12">
                                    <div className="custom__card">
                                        <img src={prod.image_link ? prod.image_link : "https://via.placeholder.com/150" } alt="makeup logo"  width={150} />
                                        <p>{prod.name}</p>
                                        <p>{prod.rating ? `⭐ ${prod.rating}` : "No ratings yet" }</p>
                                        <p>{prod.price} {prod.price_sign ? prod.price_sign : "$"}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                       
                )
            })}
            
            </div>
        </div>
    );
};

export default Products;