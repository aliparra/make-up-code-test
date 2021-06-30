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
            {products.map((prod) => {
                return (
                    <div key={prod.id}>
                        
                        <p>{prod.name}</p>
                    </div>
                
                )
            })}
        </div>
    );
};

export default Products;