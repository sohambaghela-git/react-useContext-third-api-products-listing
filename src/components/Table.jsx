import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

function Table() {
    const { products } = useContext(ProductContext)
    return(
        <>
            <div className="container mt-4">
                <h2>Product Table</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Thumbnail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>
                            <img src={product.thumbnail} alt={product.title} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;