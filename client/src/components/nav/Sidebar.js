import React from 'react';
import Appli from '../../ratingcomponent/Appli'
import {Link,useNavigate} from 'react-router-dom'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { getAuth, updateProfile } from 'firebase/auth'

const {SubMenu,Item}=Menu;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  HomeOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));




const Sidebar = ({content}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

   const auth=getAuth();
  const navigate=useNavigate();
    const onLogout = () => {
    auth.signOut()
    navigate('/');
    navigate(0);
  }
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background:"lightgreen"
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            width:100,
            fontSize:30
          }}
        >DashBoard</div>
        <Menu theme="blue" mode="inline" key="Home" >
       <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <SubMenu title="Rate It">
      <Item key="home" icon={<HomeOutlined />}>
    rating
      <Link to='/rating' ></Link>
    </Item>
    </SubMenu >
    <Item key="alluser" icon={<HomeOutlined />}>
    All Users
      <Link to='/alluser' ></Link>
    </Item>
    <Item key="three" icon={<AppstoreOutlined/>}>
        Add Items
         <Link to='/additems' ></Link>
    </Item>

     <Item key="logout" className="log" icon={<AppstoreOutlined/>} onClick={onLogout} style={{color:"red"}}>
        Logout
        
    </Item>
        
   </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft:200,
        }}
      >
       
        <Content
          style={{
            
            overflow: 'auto',

          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: "#dddddd",
            }}
          >
            {content}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background:"lightgreen",
            
          }}
        >
         Devloped By Softech Technology Pvt Ltd <sup>Copyright</sup>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;