import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import FormControl from "../components/FormControl";
import Button from "../components/Button";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <FormContainer>
      <h1 className="text-center text-[#502314] mb-[1rem] font-bold">
        Sign in
      </h1>
      <Form
        onSubmit={submitHandler}
        className="text-[#502314] flex flex-col justify-center "
      >
        <Form.Group controlId="email" className=" text-[1.5rem] ">
          <Form.Label>Email Address</Form.Label>
          <FormControl
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" className=" text-[1.5rem] ">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button isLoading={isLoading} type="submit" variant="submit">
          Sign in
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className="py-4">
        <Col className="text-[1.4rem]">
          New Customer?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="ml-[0.5rem] !text-blue-500 font-bold !underline"
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
