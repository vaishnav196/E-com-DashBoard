import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const url = "http://localhost:5000";
  const params = useParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`${url}/product/${params.id}`);
        const product = response.data;
        setProductName(product.name);
        setPrice(product.price);
        setCategory(product.category);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    getProductDetails();
  }, [params.id]);

  const updateProduct = async (event) => {
    event.preventDefault();
    
    // Check if any field is empty
    if (!productName.trim() && !price.trim() && !category.trim()) {
      // console.error('At least one field is required!');
      return;
    }

    try {
      const response = await axios.put(`${url}/product/${params.id}`, {
        name: productName,
        price: price,
        category: category
      });

      if (response.status === 200) {
        console.log('Product updated successfully!');
        // Handle success, maybe redirect or show a success message
      } else {
        console.error('Failed to update product:', response.data);
        // Handle error, maybe show an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(productName, price, category);
  };

  return (
    <div className="container">
      <h1 className='text-center'>Update Products</h1>
      <div className="row">
        <div className="col-6 d-block m-auto">
          <form onSubmit={updateProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary d-block m-auto w-75">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
