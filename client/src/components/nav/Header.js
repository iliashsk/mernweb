import React,{useState} from 'react'
import {Menu} from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
const {SubMenu,Item}=Menu;

const Header=()=>{

	const [current,setCurrent]=useState("mail");

	const handleClick=(e)=>{
		console.log(e.key);
		setCurrent(e.key);

	}

	return(
  <Menu onClick={handleClick} defaultSelectedKeys={[current]} mode="horizontal">
    
    <Item key="home" icon={<HomeOutlined />}>
      <Link to='/' >Home</Link>
    </Item>
     <Item key="register" icon={<UserAddOutlined />} className="float-right">
     <Link to='/regist' >Regist</Link>
    </Item>
    <Item key="login" icon={<UserOutlined />} className="float-right"	>
      <Link to='/login' >Login</Link>
    </Item>
   

    <SubMenu key="SubMenu" title="Setting" icon={<SettingOutlined />} >
      <Item key="two" icon={<AppstoreOutlined />}>
        Setting 1
      </Item>
      <Item key="three" icon={<AppstoreOutlined />}>
        Setting 2
      </Item>
      
    </SubMenu>


  
  </Menu>
);
}
export default Header;