import { Outlet, Link,NavLink } from "react-router-dom";
import ActiveMenuLink from "active-menu-link"

const Layout = () => {

  const col={
    color:'black',
    fontSize:'30px',
    textDecoration:'none',

  }
  
  
  return (
    <>
      <nav>
  
  <div id="navli">
    <ul >
     <li className="laylink">
            <NavLink to="/" style={col} activeClassName="active">Home</NavLink>
          </li>
          <li className="laylink">
            <NavLink to="/rating" style={col} activeClassName="active">Rate Our Service</NavLink>
          </li >
          <li className="laylink">
            <NavLink to="/regist" style={col} activeClassName="active">Register</NavLink>
          </li>
           <li className="laylink">
            <NavLink to="/registdetails" style={col} activeClassName="active">Registered user Details</NavLink>
          </li>
      
      
    </ul>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;


