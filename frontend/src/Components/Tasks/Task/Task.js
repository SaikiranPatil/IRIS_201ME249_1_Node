import React from 'react'
import { useNavigate } from "react-router-dom";

const Task = () => {
    const navigate = useNavigate();
    return (
        <div className="col-lg-4 col-md-6 col-12" onClick={() => navigate("/task/23hhj234")} style={{"cursor":"pointer"}}>
            <div className="single-product">
                <div className="product-image">
                    <img src="assets/images/products/product-7.jpg" alt="#" />
                    <span className="sale-tag">5 Days Left</span>
                    <span className="new-tag">Completed </span>
                </div>
                <div className="product-info">
                    <span className="category">Watches</span>
                    <h4 className="title">
                        <a href="product-grids.html">Xiaomi Mi Band 5</a>
                    </h4>
                    <ul className="review">
                        <li>
                            <span>5 SubTask(s)</span>
                        </li>
                    </ul>
                    <div className="price">
                        <span>$199.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task