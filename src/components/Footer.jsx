import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                {/* <img
                  src="logo.png" 
                  alt="Company Logo"
                  className="logo img-fluid"
                  style={{ maxWidth: "120px" }}
                /> */}
                <span className="ms-2 h4 text-white">Booing System</span>
              </div>

              <p className="text-white-50">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                ad quo illum explicabo doloribus velit tempore reprehenderit aut
                quis hic! Distinctio ducimus/.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white text-decoration-none">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-white text-decoration-none">
                  Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-white">Contact Information</h5>
            <address className="text-white-50">
              <strong>Company Address:</strong>
              <br />
              No,10 P.U Shanmugam nagar , polur Road ,Thiruvannamalai.
              <br />
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> contact@company.com
              <br />
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
