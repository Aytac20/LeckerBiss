import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="mb-[2rem]">
      {/* Navigation Steps */}
      <Nav className="justify-content-center text-[1.5rem]">
        <Nav.Item>
          {step1 ? (
            <Nav.Link as={Link} to="/login" className="!text-[#d93514]">
              Sign In
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Sign In</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step2 ? (
            <Nav.Link as={Link} to="/shipping" className="!text-[#d93514]">
              Shipping
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step3 ? (
            <Nav.Link as={Link} to="/payment" className="!text-[#d93514]">
              Payment
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>

        <Nav.Item>
          {step4 ? (
            <Nav.Link as={Link} to="/placeorder" className="!text-[#d93514]">
              Place Order
            </Nav.Link>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default CheckoutSteps;
