import axios from "axios";
import React, { useEffect, useState } from "react";

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
        console.error("Failed to fetch products:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${url}/products/${id}`);
      if (response.status === 200) {
        console.log("Product deleted successfully");

        getProducts();
      } else {
        console.error("Failed to delete product:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
        <h1 className="text-md-center">Products</h1>
      <h1 className="text-center">Products </h1>
      <table className="table table-dark table-striped container">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cateogory</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td >{i + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td><button className="btn btn-danger btn-sm" onClick={()=>{deleteProduct(product._id)}}>delete</button> <button className="btn btn-primary btn-sm">update</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container-fluid">
        <div className="row">
         
            {products.map((product, i) => (
                <div className="col-md-4 mb-3"  key={product._id}>
  <div className="card" style={{ width: "30rem" }}>
                <img src="..." className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.price}</p>
                  <button href="" className="btn btn-primary d-block  m-auto w-100">
                    Add to cart
                  </button>
                </div>
              </div>
                </div>
            
            ))}
         
        </div>
      </div>
    </div>
  );
}

export default Products;
