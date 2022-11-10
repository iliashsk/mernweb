import { Outlet, Link,NavLink } from "react-router-dom";
import ActiveMenuLink from "active-menu-link"

const Layout = () => {

  const col={
    color:'black',
    fontSize:'25px',
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
          <li className="laylink">
            <NavLink to="/weather" style={col} activeClassName="active">Check city temperature</NavLink>
          </li>
      
      
    </ul>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;


