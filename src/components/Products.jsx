import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    const url = "http://localhost:5000";

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${url}/products`);

            if (response.status === 200) {
                setProducts(response.data);
            } else {
                console.error('Failed to fetch products:', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Products are here</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <strong>{product.name}</strong> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
