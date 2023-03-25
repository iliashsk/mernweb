import React,{useState,useEffect} from 'react'
import {Menu} from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined,DropboxOutlined }
 from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
const {SubMenu,Item}=Menu;


const UserHeader=()=>{

	const [current,setCurrent]=useState("mail");
   const [isDesktop,setIsDesktop]=useState()


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

  useEffect(()=>{
  if (window.innerWidth < 720) {
      setIsDesktop(false);
  }else{
    setIsDesktop(true);
  }
},[])

	return(<>
    {isDesktop ?
     (<Menu onClick={handleClick} defaultSelectedKeys={[current]} mode="horizontal"
   style={{position:"fixed",background:"cyan",width:"100%",zIndex:'10'}} >
    
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
      <Item key='contact' icon={<AppstoreOutlined/>}>
      Contact Us
        <Link to='/contact' ></Link>
      </Item>
      <Item key="saree" icon={<AppstoreOutlined/>}>
        Sarees
        <Link to='/saree' />
         </Item>
      <Item key="three" icon={<AppstoreOutlined/>}>
        Admin Singnin
        <Link to='/signin' />
         </Item>
        
        
  </Menu>):  (
    <Menu onClick={handleClick} defaultSelectedKeys={[current]} mode="horizontal"
   style={{position:"fixed",width:"100%",zIndex:'10'}}  className='grad'>
    
  <SubMenu key="appstore" title={<AppstoreOutlined style={{fontSize:'40px'}}/>} style={{marginLeft:'auto'}}>
  <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>

      <Item key='contact' icon={<AppstoreOutlined/>}>
      Contact Us
        <Link to='/contact' ></Link>
      </Item>

      <Item key="saree" icon={<AppstoreOutlined/>}>
        Sarees
        <Link to='/saree' />
         </Item>

      <Item key="three" icon={<AppstoreOutlined/>}>
        Admin Singnin
        <Link to='/signin' />
         </Item>
         
         </SubMenu>
         </Menu>
    )
  }
  
</>);
}
export default UserHeader;
     {/*<SubMenu key="RegistDetails" title="User Corner" icon={<SettingOutlined />}>
     <Item key="register" icon={<UserAddOutlined />} className="float-right">
     Registration
     <Link to='/regist' ></Link>
    </Item>
         <Item key="sturegister" icon={<UserAddOutlined />} className="float-right">
     Student Registration
     <Link to='/sturegist' ></Link>
    </Item>
      <Item key="Marksheet" icon={<UserAddOutlined />} className="float-right">
     Marksheet
     <Link to='/marks' ></Link>
    </Item>
    <Item key="Marksheet" icon={<UserAddOutlined />} className="float-right">
     Category
     <Link to='/category' ></Link>
    </Item>
   
    </SubMenu>
    <Item key="login" icon={<UserOutlined />} className="float-right"	>
      <Link to='/login' >Login</Link>
    </Item>
 

    
    
      
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
  */ }
          
         

