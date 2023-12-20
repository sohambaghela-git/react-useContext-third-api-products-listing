import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

function Card() {
    const { products } = useContext(ProductContext)
    return(
        <>
            <div className="container mt-4">
                <h2>Product Card</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {products.map(product => (
                    <div key={product.id} className="col mb-4">
                        <div className="card h-100">
                        <img src={product.thumbnail} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">${product.price.toFixed(2)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">ID: {product.id}</small>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </>
    )
}

export default Card;