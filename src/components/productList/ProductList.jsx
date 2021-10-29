import React from 'react'
import './productList.css'
import Product from '../product/Product.jsx'
import {products} from '../../data.js'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's turboBarbitura.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi totam natus mollitia saepe neque?
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
                    
               
            </div>
        </div>
    )
}

export default ProductList
