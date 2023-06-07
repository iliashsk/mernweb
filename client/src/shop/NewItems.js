import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,createSearchParams} from 'react-router-dom'
import { ImageListItem,ImageList } from '@mui/material';
import { useAuthStatus } from '../hooks/useAuthStatus'
import DeletePhoto from './DeletePhoto.js'

const NewItems = () => {
    const [newUser, setNewUser] = useState(
        {
            name: '',
            title: '',
            photo: [],
            price:'',
            sellprice:''
        }
    );
  const [upPhoto,setUpPhoto]=useState([])
const [src,setSrc]=useState([]);
//const isInitialMount = useRef(true);
const {isLoading, loggedIn} = useAuthStatus();
const navigate=useNavigate();

 const loadPhoto=()=>{
axios.get("/cl/getphoto")
.then(res=>{
    //console.log(res.data)
setSrc(res.data)
})
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        const formData = new FormData();
         for (let i = 0; i < upPhoto.length; i++) {
      formData.append("photo", upPhoto[i]);
    }
       /* formData.append('photo', upPhoto[0]);
        formData.append('photo', upPhoto[1]);
        formData.append('photo', upPhoto[2]);
        */
        formData.append('title', newUser.title);
        formData.append('name', newUser.name);
        formData.append('price', newUser.price);
        formData.append('sellprice', newUser.sellprice);

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
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        const uploaded=[];
        chosenFiles.map((obj)=>{
           
            uploaded.push(obj);

        })
        setUpPhoto(uploaded);
        console.log(upPhoto);
         
    }
    const handleImage=(e)=>{
        e.preventDefault();
        //console.log(e.target.id.value);

        navigate({
        pathname:'/single',
        search:createSearchParams({
        id:e.target.id.value
        }).toString()
        });
    }

   
useEffect(()=>{
    
      loadPhoto();
  },[])

    return (<>
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
               multiple
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
            <td>Selling Price:</td>
            <td>
            <input 
                type="number"
                placeholder="selling Price"
                name="sellprice"
                value={newUser.sellprice}
               onChange={handleChange}
            />
            </td>
            </tr>

            <tr>
            <td>Price:</td>
            <td>
            <input 
                type="number"
                placeholder="Price"
                name="price"
                value={newUser.price}
               onChange={handleChange}
            />
            </td>
            </tr>

            <tr>
            <td>descriptions:</td>
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
<h3>Check Out Our Products here</h3> 
        <ImageList sx={{ width:'90%', height:'80%' }} cols={4}>
  {src.map((item,index) => (
    <ImageListItem key={index}>
     {(window.innerWidth>720)? 
     (<>
        <form onSubmit={handleImage}>
        
        <button  style={{cursor:'pointer'}}>
        <input type='hidden' name='id' value={item._id} />
        <img id='proimg'
        src={item.filename1}
        
        alt={item.name}
        loading="lazy"
        style={{height:'300px', width:'250px'}}
      />
      <p>{item.name}</p>
      <div style={{display:'flex'}}> 
      <p>Price:</p>
      <p style={{textDecoration:'line-through',color:'red'}}>:{item.price}</p>
      <sup style={{color:'green',fontSize:'13px'}}>{item.sellprice}</sup>
      </div>
      
      </button>
      </form></>)
     :
     (<><div width="90px" style={{fontSize:'11px'}}>
        <form onSubmit={handleImage}>
        
        <button  style={{cursor:'pointer'}}>
        <input type='hidden' name='id' value={item._id} />
        <img
        src={item.filename1}
        
        alt={item.name}
        loading="lazy"
        style={{height:'90px', width:'80px'}}
      />
      <p>{item.name}</p>

      <p style={{textDecoration:'line-through',color:'red'}}>Price:{item.price}</p>
      <p>    :{item.sellprice}</p>
      
      
      </button>
      </form></div></>)}
      
      <DeletePhoto 
      id={item._id}
      fname1={item.fname1}
      fname2={item.fname2}
      fname3={item.fname3}
      load={loadPhoto}
      />
    </ImageListItem>
  ))}
</ImageList>
</div>
        
   </> );
}

export default NewItems;