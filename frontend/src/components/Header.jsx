import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="sticky top-0 z-50">
      <Navbar
        expand="md"
        className="mb-3"
        style={{
          background: "#f3ddbe",
          maxHeight: "7rem",
          borderBottom: "1px #50231455 solid",
        }}
      >
        <Container
          fluid
          style={{
            height: "7rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              border: "none",

              marginBottom: "1rem",
            }}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            style={{ width: "35rem", backgroundColor: "#f3ddbe" }}
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: "2rem" }}>
              <Nav
                className="justify-content-start flex-grow-1"
                style={{ gap: "2rem", fontSize: "1.5rem" }}
              >
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{
                    color: "#502314",
                    fontWeight: "bold",
                  }}
                >
                  MENU
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/cart"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#502314",
                    fontWeight: "bold",
                  }}
                >
                  CART
                  {cartCount > 0 && (
                    <Badge
                      pill
                      bg="success"
                      style={{ marginLeft: "5px", fontWeight: "initial" }}
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Nav.Link>

                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id="username"
                    style={{
                      color: "#502314",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/profile"
                      className="text-[1.5rem] !text-[#502314]"
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={logoutHandler}
                      className="text-[1.5rem] !text-[#502314]"
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/login"
                    style={{ color: "#502314", fontWeight: "bold" }}
                  >
                    Sign In
                  </Nav.Link>
                )}

                {userInfo?.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu">
                    <NavDropdown.Item
                      as={Link}
                      to="/admin/orderlist"
                      className="text-[1.5rem] !text-[#502314]"
                    >
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/admin/userlist"
                      className="text-[1.5rem] !text-[#502314]"
                    >
                      Users
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/admin/productlist"
                      className="text-[1.5rem] !text-[#502314]"
                    >
                      Products
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
