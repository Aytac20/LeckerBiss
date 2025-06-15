import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";
import FormControl from "../components/FormControl";
import Button from "../components/Button";
const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />

      <Form
        onSubmit={submitHandler}
        className="text-[#502314] flex flex-col justify-center"
      >
        <Form.Group controlId="address" className="my-3 text-[1.5rem] ">
          <Form.Label>Address</Form.Label>
          <FormControl
            typ="address"
            value={address}
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="city" className="my-3 text-[1.5rem]">
          <Form.Label>City</Form.Label>
          <FormControl
            typ="city"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-3 text-[1.5rem]">
          <Form.Label>Postal Code</Form.Label>
          <FormControl
            type="text"
            placeholder="Enter postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="country" className="my-3 text-[1.5rem]">
          <Form.Label>Country</Form.Label>
          <FormControl
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="submit">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
