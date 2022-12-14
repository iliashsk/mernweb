import { Outlet, Link,NavLink,useNavigate } from "react-router-dom";
import ActiveMenuLink from "active-menu-link"
import { getAuth, updateProfile } from 'firebase/auth'
const Layout = () => {

  const col={
    color:'black',
    fontSize:'25px',
    textDecoration:'none',

  }
  const navigate=useNavigate();
  const auth=getAuth();
  const onLogout = () => {
    auth.signOut()
    navigate('/');
    navigate(0);
  }
  
  
  return (
    <>
      <nav>
  
  <div id="navli">
    <ul >
     
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
          <li className="laylink">
            <NavLink to="/calculator" style={col} activeClassName="active">Temperature converter</NavLink>
          </li>
          <li className="laylink">
                <header className='profileHeader'>
        <button type='button' className='logOut' onClick={onLogout}>
          Logout
        </button>
      </header>
      </li>
      
      
    </ul>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;


