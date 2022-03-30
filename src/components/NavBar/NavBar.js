import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Nav, NavList, ListItem, NavButton, Brand } from "./NavBar.styles";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Nav>
      <NavList>
        <Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Habit Tracker</b>
          </Link>
        </Brand>
        <ListItem>
          {user ? (
            <NavButton onClick={logoutUser}>Logout</NavButton>
          ) : (
            <NavButton onClick={() => navigate("/login")}>Login</NavButton>
          )}
        </ListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
