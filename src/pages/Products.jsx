
import ProductCard from '../component/ProductCard'
import { Nav } from 'react-bootstrap'
import { data } from '../DataBase/ProductDB'


const Product = () => {
    return (
        <div>
            <Nav/>
            <h1>Product Page</h1>
            <div className="d-flex justify-content-between flex-wrap gap-3">
                {data.map((product) => {
                    return (
                        <div className="" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    )

                })}
            </div>

        </div>
    )
}
export default Product