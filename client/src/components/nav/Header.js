import React,{useState} from 'react'
import {Menu} from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined,DropboxOutlined,
ShoppingOutlined }
 from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
const {SubMenu,Item}=Menu;


const Header=()=>{

	const [current,setCurrent]=useState("mail");

	const handleClick=(e)=>{
		console.log(e.key);
		setCurrent(e.key);

	}
  const auth=getAuth();
  const navigate=useNavigate();
    const onLogout = () => {
    auth.signOut()
    navigate('/');
    navigate(0);
  }

	return(
    
  <Menu onClick={handleClick} defaultSelectedKeys={[current]} mode="horizontal"
   style={{position:"fixed",background:"cyan",width:"100%",zIndex:'10'}} >
    
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
     <SubMenu key="RegistDetails" title="User Corner" icon={<SettingOutlined />}>
     <Item key="register" icon={<UserAddOutlined />} className="float-right">
     Registration
     <Link to='/regist' ></Link>
    </Item>
    <Item key="registdetails" icon={<UserAddOutlined />} className="float-right">
     Registered users
     <Link to='/registdetails' ></Link>
    </Item>
    </SubMenu>
   {/* <Item key="login" icon={<UserOutlined />} className="float-right"	>
      <Link to='/login' >Login</Link>
    </Item>
  */ }

    <SubMenu key="Shopping" title="Shopping" icon={<ShoppingOutlined />}>
      <Item key="Electronics" icon={<ShoppingOutlined/>}>
        Electronics
        <Link to='/electronics' ></Link>
      </Item>
      <Item key="three" icon={<AppstoreOutlined/>}>
        Add Items
         <Link to='/additems' ></Link>
      </Item>
      
    </SubMenu>
    <SubMenu key="Student" title="Admission" icon={<DropboxOutlined />}>
        <Item key="two" icon={<AppstoreOutlined/>}>
        Admission
        <Link to='/regist' />
        </Item>
        <Item key="three" icon={<AppstoreOutlined/>}>
        Merit List
        <Link to='/merit' />
        </Item>
      <SubMenu key="Stud" title="class" icon={<DropboxOutlined />}>
        <Item key="two" icon={<AppstoreOutlined/>}>
        Eleven
        <Link to='/regist' />
        </Item>
        <Item key="three" icon={<AppstoreOutlined/>}>
        Twelve
        <Link to='/merit' />
         </Item>
      
      </SubMenu>
      
    </SubMenu>
    <Item key="rating" icon={<HomeOutlined />}>
    Rate Here
      <Link to='/rating' ></Link>
    </Item>
     <SubMenu key="utility" title="Utility" icon={<DropboxOutlined />}>
 <Item key="temp" icon={<HomeOutlined />}>
  Weather
      <Link to='/weather' ></Link>
    </Item>
     <Item key="calculator"  icon={<HomeOutlined />}>
  F<sup>o</sup> to C<sup>o</sup> 
      <Link to='/calculator' ></Link>
    </Item>
  </SubMenu>
          
         <Item key="profile" icon={<AppstoreOutlined/>}  >
        Profile
        <Link to='/profile' ></Link> 
        </Item>
        <Item key="logout" className="log" icon={<AppstoreOutlined/>} onClick={onLogout} style={{color:"red"}}>
        Logout
        
        </Item>
  </Menu>
  
);
}
export default Header;