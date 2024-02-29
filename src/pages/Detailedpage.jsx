import React from 'react'
import ProductCard from '../component/ProductCard'
import { useParams } from 'react-router-dom'
import {data} from '../DataBase/ProductDB'
import DetailCard from '../component/DetailedCard'

const DetailedPage = ({}) => {
    const { id } = useParams()
    // console.log(`Product ${id} clicked`);
    // console.log(data);

    // Go into the database and find the product with the id === productId
    const product = data.find((product) => product.id === parseInt(id));

    console.log(product);


  return (
    <div>
        <h1>Detailed Page</h1>
        {/* <ProductCard/> */}
        <div className="">
            <h3>Product {id} clicked</h3>
            {/* <ProductCard product={product}/> */}
            <DetailCard product={product}/>
            {/* <p>{Product.price}</p> */}
        </div>
    </div>
  )
}

export default DetailedPage






