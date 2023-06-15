import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark ">
      <div className="row  text-white pt-5 p-3">
        <div className="col-lg-4">
          <h3>Subscribe Newsletter</h3>
          <p>Subscribe newsletter to get 5% discount on all products</p>
        </div>
        <div className="col-lg-4 d-inline-flex justify-content-center p-3  align-items-center ">
          <input type="email" className="form-control mx-2 " />
          <button className="btn btn-danger mx-2 ">Subscribe</button>
        </div>
        <div className="col-lg-4 d-flex justify-content-center p-3 align-items-center">
          <i className="fa-brands fa-facebook  fa-2x mx-2"></i>
          <i className="fa-brands fa-instagram  fa-2x mx-2"></i>
          <i className="fa-brands fa-pinterest  fa-2x mx-2"></i>
        </div>
      </div>
      <hr />
      <div className="row text-white">
        <div className="col-md-6 col-lg-3 py-3">
          <h4>
            <span className="bg-danger text-dark logo-bg p-1 rounded-5">
              <i className="fa-solid fa-shop"></i>
            </span>
          Logo
          </h4>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <h5>Shop For Men</h5>
          <p>Clothing Fashion</p>
          <p>Winter</p>
          <p>Summer</p>
          <p>Formal</p>
          <p>Casual</p>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <h5>Shop For Women</h5>
          <p>Clothing Fashion</p>
          <p>Winter</p>
          <p>Summer</p>
          <p>Formal</p>
          <p>Casual</p>
        </div>
        <div className="col-md-6 col-lg-3 py-3">
          <h5>Quick Links</h5>
          <p>Track Your Order</p>
          <p>Support</p>
          <p>FAQ</p>
          <p>Carrier</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
