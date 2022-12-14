import React,{useState} from 'react'
import {Menu} from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined,DropboxOutlined } from '@ant-design/icons';
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
    home
      <Link to='/' ></Link>
    </Item>
     <Item key="register" icon={<UserAddOutlined />} className="float-right">
     Registration
     <Link to='/regist' ></Link>
    </Item>
   {/* <Item key="login" icon={<UserOutlined />} className="float-right"  >
      <Link to='/login' >Login</Link>
    </Item>
  */ }

    <SubMenu key="SubMenu" title="Setting" icon={<SettingOutlined />}>
      <Item key="two" icon={<AppstoreOutlined/>}>
        Setting 1
      </Item>
      <Item key="three" icon={<AppstoreOutlined/>}>
        Setting 2
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
   

  
  </Menu>
);
}
export default Header;