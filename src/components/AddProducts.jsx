import React, { useState } from 'react';

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product Name:', productName);
    console.log('Price:', price);
    console.log('Category:', category);
    setProductName('');
    setPrice('');
    setCategory('');
  };

  return (
  <div className="container">
    <h1 className='text-center'>Add Products</h1>
    <div className="row">
      <div className="col-6 d-block m-auto">
      <form onSubmit={handleSubmit}>
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
        <select
          className="form-select"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
    </div>
  </div>
  );
};

export default AddProducts;
