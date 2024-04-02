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

  return (
    <div>
      <h1 className="text-center">Products </h1>
      <table className="table table-dark table-striped container">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cateogory</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr>
              <td key={i}>{i + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container">
        <div className="row">
         
            {products.map((product, i) => (
                <div className="col-md-4">
  <div class="card" key={i} style={{ width: "" }}>
                <img src="..." class="card-img" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <h5 class="card-title">{product.category}</h5>
                  <p class="card-text">{product.price}</p>
                  <button href="" class="btn btn-primary d-block  m-auto w-100">
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
