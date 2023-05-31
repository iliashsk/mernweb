import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ImageListItem,ImageList } from '@mui/material';
import { useAuthStatus } from '../hooks/useAuthStatus'
import DeletePhoto from './DeletePhoto.js'

const NewItems = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            title: '',
            photo: '',
        }
    );
const [src,setSrc]=useState([]);
//const isInitialMount = useRef(true);
const {isLoading, loggedIn} = useAuthStatus();
const navigate=useNavigate();

 const loadPhoto=()=>{
axios.get("/cl/getphoto")
.then(res=>{
setSrc(res.data)
})
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('title', newUser.title);
        formData.append('name', newUser.name);

        axios.post('/cl/cloudinary', formData)
             .then(res => {
                console.log("data is uploaded");
             })
             .catch(err => {
                console.log(err);
             });
     loadPhoto();
    setTimeout(() => {
      loadPhoto()
    }, 2000)
    
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

   

useEffect(()=>{
    
      loadPhoto();
  },[])

    return (<>
        <br/><br/>
        {loggedIn?
       ( <div align="center">
        <h3>Upload Photo and photo details</h3>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <table border="1">
            <tr>
            <td>Photo</td>
            <td>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
               onChange={handlePhoto}
            />
            </td>
            </tr>
            <tr>
            <td>name:</td>
            <td>
            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
               onChange={handleChange}
            />
            </td>
            </tr>
            <tr>
            <td>title</td>
            <td>
            <input 
                type="text"
                name="title"
                value={newUser.title}
                onChange={handleChange}
            />
            </td>
            </tr>
            <tr>
            <td>
            <input 
                type="submit" value="submit"
            />
            </td>
            </tr>
            </table>
        </form>
        </div>)
       :(<p></p>)
   }

<div align="center">
<h3>See Our Products</h3> 
       <ImageList sx={{ width:'90%', height:'80%' }} cols={4}>
  {src.map((item,index) => (
    <ImageListItem key={index}>
     {(window.innerWidth>720)? 
     (<><img
        src={item.filename}
        
        alt={item.title}
        loading="lazy"
        style={{height:'300px', width:'250px'}}
      />
      <p>{item.name}</p>
      <p>{item.title}</p></>)
     :
     (<><div width="105px" style={{fontSize:'11px'}}><img
        src={item.filename}
        
        alt={item.title}
        loading="lazy"
        style={{height:'100px', width:'80px'}}
      />
      <p >{item.name}</p>
      <p>{item.title}</p></div></>)}
      
      <DeletePhoto 
      id={item._id}
      fname={item.fname}
      load={loadPhoto}
      />
    </ImageListItem>
  ))}
</ImageList>
</div>
        
   </> );

}

export default NewItems;