import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <NavLink to="/">Home</NavLink>
      &nbsp;  &nbsp;

      <NavLink to="/about">About</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/contact">Contact</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/students">Students</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/products">Products</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/dashboard">Dashboard</NavLink>
      &nbsp;  &nbsp;
    
      <NavLink to="/login">Login</NavLink>

    </nav>
  );
}

export default Navbar;