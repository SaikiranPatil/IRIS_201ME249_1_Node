import React from 'react'
import Task from '../Task/Task'

const AllTasks = () => {
    return (
        <section className="product-grids section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-15">
                        <div className="product-grids-head">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-grid"
                                    role="tabpanel"
                                    aria-labelledby="nav-grid-tab"
                                >
                                    <div className="row">
                                        <Task/>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-2.jpg" alt="#" />
                                                    <span className="sale-tag">-25%</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Speaker</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Bluetooth Speaker</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$275.00</span>
                                                        <span className="discount-price">$300.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-3.jpg" alt="#" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Camera</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">WiFi Security Camera</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$399.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-4.jpg" alt="#" />
                                                    <span className="new-tag">New</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Phones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">iphone 6x plus</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$400.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-5.jpg" alt="#" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Headphones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Wireless Headphones</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$350.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-6.jpg" alt="#" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Speaker</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Mini Bluetooth Speaker</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star" />
                                                        </li>
                                                        <li>
                                                            <span>4.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$70.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-7.jpg" alt="#" />
                                                    <span className="sale-tag">-50%</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Headphones</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Wireless Headphones</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star" />
                                                        </li>
                                                        <li>
                                                            <span>4.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$100.00</span>
                                                        <span className="discount-price">$200.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-8.jpg" alt="#" />
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Laptop</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Apple MacBook Air</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$899.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="single-product">
                                                <div className="product-image">
                                                    <img src="assets/images/products/product-2.jpg" alt="#" />
                                                    <span className="sale-tag">-25%</span>
                                                    <div className="button">
                                                        <a href="product-details.html" className="btn">
                                                            <i className="lni lni-cart" /> Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <span className="category">Speaker</span>
                                                    <h4 className="title">
                                                        <a href="product-grids.html">Bluetooth Speaker</a>
                                                    </h4>
                                                    <ul className="review">
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <i className="lni lni-star-filled" />
                                                        </li>
                                                        <li>
                                                            <span>5.0 Review(s)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="price">
                                                        <span>$275.00</span>
                                                        <span className="discount-price">$300.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-list"
                                    role="tabpanel"
                                    aria-labelledby="nav-list-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src="assets/images/products/product-1.jpg"
                                                                alt="#"
                                                            />
                                                            <div className="button">
                                                                <a href="product-details.html" className="btn">
                                                                    <i className="lni lni-cart" /> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">Watches</span>
                                                            <h4 className="title">
                                                                <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                                            </h4>
                                                            <ul className="review">
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star" />
                                                                </li>
                                                                <li>
                                                                    <span>4.0 Review(s)</span>
                                                                </li>
                                                            </ul>
                                                            <div className="price">
                                                                <span>$199.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src="assets/images/products/product-2.jpg"
                                                                alt="#"
                                                            />
                                                            <span className="sale-tag">-25%</span>
                                                            <div className="button">
                                                                <a href="product-details.html" className="btn">
                                                                    <i className="lni lni-cart" /> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">Speaker</span>
                                                            <h4 className="title">
                                                                <a href="product-grids.html">
                                                                    Big Power Sound Speaker
                                                                </a>
                                                            </h4>
                                                            <ul className="review">
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <span>5.0 Review(s)</span>
                                                                </li>
                                                            </ul>
                                                            <div className="price">
                                                                <span>$275.00</span>
                                                                <span className="discount-price">$300.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src="assets/images/products/product-3.jpg"
                                                                alt="#"
                                                            />
                                                            <div className="button">
                                                                <a href="product-details.html" className="btn">
                                                                    <i className="lni lni-cart" /> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">Camera</span>
                                                            <h4 className="title">
                                                                <a href="product-grids.html">
                                                                    WiFi Security Camera
                                                                </a>
                                                            </h4>
                                                            <ul className="review">
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <span>5.0 Review(s)</span>
                                                                </li>
                                                            </ul>
                                                            <div className="price">
                                                                <span>$399.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src="assets/images/products/product-4.jpg"
                                                                alt="#"
                                                            />
                                                            <span className="new-tag">New</span>
                                                            <div className="button">
                                                                <a href="product-details.html" className="btn">
                                                                    <i className="lni lni-cart" /> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">Phones</span>
                                                            <h4 className="title">
                                                                <a href="product-grids.html">iphone 6x plus</a>
                                                            </h4>
                                                            <ul className="review">
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <span>5.0 Review(s)</span>
                                                                </li>
                                                            </ul>
                                                            <div className="price">
                                                                <span>$400.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="single-product">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="product-image">
                                                            <img
                                                                src="assets/images/products/product-7.jpg"
                                                                alt="#"
                                                            />
                                                            <span className="sale-tag">-50%</span>
                                                            <div className="button">
                                                                <a href="product-details.html" className="btn">
                                                                    <i className="lni lni-cart" /> Add to Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-8 col-12">
                                                        <div className="product-info">
                                                            <span className="category">Headphones</span>
                                                            <h4 className="title">
                                                                <a href="product-grids.html">
                                                                    PX7 Wireless Headphones
                                                                </a>
                                                            </h4>
                                                            <ul className="review">
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star-filled" />
                                                                </li>
                                                                <li>
                                                                    <i className="lni lni-star" />
                                                                </li>
                                                                <li>
                                                                    <span>4.0 Review(s)</span>
                                                                </li>
                                                            </ul>
                                                            <div className="price">
                                                                <span>$100.00</span>
                                                                <span className="discount-price">$200.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllTasks