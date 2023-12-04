
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      
        <div className="product-container">
          {products.map(product => (
            <div key={product.id} className="product-item">
                <img src={product.thumbnail} alt="" />
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default Product;
