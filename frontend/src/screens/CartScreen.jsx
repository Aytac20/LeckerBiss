import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import Message from "../components/Message";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Button from "../components/Button";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="w-[80%] lg:w-[60%] mx-auto my-[2rem]">
      <div className="bg-[#502314] text-[#f5ebdc] text-[2rem] h-[6rem] flex justify-center items-center font-extrabold mt-[-1rem] rounded-lg tracking-wide">
        <span>Your Shopping Cart</span>
      </div>
      <Row>
        <Col>
          {cartItems.length === 0 ? (
            <Message>
              Oops! Your cart is empty. Add something delicious!
            </Message>
          ) : (
            <ListGroup variant="flush" className="!rounded-[1rem] p-[1rem] ">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item._id}
                  className="!bg-transparent !border-[#50231455]"
                >
                  <Row className="flex items-center  ">
                    <Col>
                      <Image src={item.image} alt={item} />
                    </Col>
                    <Col className="flex justify-center">
                      <Link
                        to={`/product/${item._id}`}
                        className=" md:text-[1.5rem] no-underline text-[#502314] font-bold "
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col className="flex justify-center text-[1.5rem] font-bold !text-[#502314]">
                      ${item.price}
                    </Col>
                    <Col>
                      {" "}
                      <div className="w-[8rem] ">
                        <Form.Select
                          value={item.qty}
                          as="select"
                          className="!text-[1.5rem] cursor-pointer"
                          onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                          }
                        >
                          {[...Array(10).keys()].map((x) => (
                            <option
                              key={x + 1}
                              value={x + 1}
                              className="text-[1.5rem] !text-[#502314]  "
                            >
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        onClick={() => removeFromCartHandler(item._id)}
                        className="!bg-transparent  !text-[#502314] !border-[#50231455] !ml-[1rem]"
                      >
                        <FaTrash className="text-[1.5rem] mx-[6px] my-[3px]" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <div className="flex justify-between mb-[4rem] border-y-[1px] border-[#50231455] py-[2rem] items-center ">
          <div className="lg:text-[2rem] text-[1.5rem] font-bold text-[#502314]">
            Subtotal: $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </div>

          <Button
            variant="submit"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed to Checkout
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default CartScreen;
