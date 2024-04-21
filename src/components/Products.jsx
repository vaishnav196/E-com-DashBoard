import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
       
      <h1 className="text-center">Products </h1>
      <div className="container-fluid p-0">
      <table className="table table-dark table-striped  ">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cateogory</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td >{i + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td><button className="btn btn-danger btn-md" onClick={() => deleteProduct(product._id)}>Delete</button> <Link className="btn btn-primary btn-sm" to={"/update-products/"+product._id}>Update</Link></td>
              
            </tr>
          ))}
        </tbody>  
      </table>
      </div>
    </div>
  );
}

export default Products;
