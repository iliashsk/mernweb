import React,{useState,useEffect} from "react";
import axios from 'axios';
import {useSearchParams,useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import {toast} from 'react-toastify'

function OrderForm(){

const [userdata,setUserdata]=useState({
  name:'',
  address:'',
  gender:'',
  product:'',
  price:'',
  pin:'',
  mobile:'',
  email:'',
})

const [searchParams]=useSearchParams();
const category=searchParams.get('id');
const [item,setItem]=useState([])
const data={category};
const navigate=useNavigate();

const handlChange=(e)=>{
  const {name,value}=e.target;
  setUserdata((prev) => ({ ...prev, [name]: value }));
  console.log(value);

}
	const handleSubmit=(e)=>{
    e.preventDefault()
    
    const name=userdata.name;//user signup time name defined at user (redux)
    const address=userdata.address;
    const gender=userdata.gender;
    const product=item.name;
    const price=item.sellprice;
    const pin=userdata.pin;
    const mobile=userdata.mobile;
    const email=userdata.email//user signup time email defined at user (redux)

    const AdmissionData={name,address,gender,product,pin,price,mobile,email};
    console.log(AdmissionData)
    axios.post('/api/users/order',AdmissionData)
    .then((error)=>{
      if(error){
        alert(error);
      }else{
        alert("success")
      }
    })
    toast("your order is taken")
navigate('/');
	}
  useEffect(()=>{
    axios.post('/single/photo',data)
    .then((result)=>{
      console.log(result.data)
      setItem(result.data)

    })
  },[])


	return(<>
		

    <h2 align='center'> Fill The Form</h2>
   <div align="center">
	<form onSubmit={handleSubmit}>
  <div class="row-center">
  <div class="mx-auto col-12 col-md-6 col-lg-12">
   
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" for="form3Example1m">Name</label>
                        <input type="text" id="name"
                         className="form-control form-control-lg" 
                         name="name"
                         value={userdata.name}
                         onChange={handlChange}
                         required
                         />
                        
                      </div>


                  <div className="form-outline mb-4">
                  <label className="form-label" for="address">Address</label>
                    <input type="text" id="name"
                         className="form-control form-control-lg" 
                         name="address"
                         value={userdata.address}
                         onChange={handlChange}
                        required
                         />
                    
                  </div>

                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                    <h6 className="mb-0 me-4">Gender: </h6>

                    <div className="form-check form-check-inline mb-0 me-4">
                    <label className="form-check-label" for="femaleGender">Female</label>
                      <input className="form-check-input"
                       type="radio" 
                       name="gender"
                        id="femaleGender"
                        value="female" 
                        onChange={handlChange}
                        required
                        />
                      
                    </div>

                    <div className="form-check form-check-inline mb-0 me-4">
                    <label className="form-check-label" for="maleGender">Male</label>
                      <input className="form-check-input" type="radio" name="gender" id="maleGender"
                        value="male" 
                        name="gender"
                        onChange={handlChange}
                        required
                        />
                      
                    </div>

                    <div className="form-check form-check-inline mb-0">
                    <label className="form-check-label" for="otherGender">Other</label>
                      <input className="form-check-input" type="radio" 
                      name="gender" id="otherGender"
                        value="other" 
                        onChange={handlChange}
                        required
                        />
                      
                    </div>

                  </div>


                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example90">Product Name</label>
                    <input type="text" id="form3Example90" 
                    className="form-control form-control-lg" 
                    name="product"
                    value={item.name}
                    onChange={handlChange}
                    required
                    readOnly
                    />
                    
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example90">Price</label>
                    <input type="text" id="form3Example90" 
                    className="form-control form-control-lg" 
                    name="price"
                    value={item.sellprice}
                    onChange={handlChange}
                    required
                    readOnly
                    />
                    
                  </div>


                  <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example90">Pincode</label>
                    <input type="text" id="form3Example90" 
                    className="form-control form-control-lg" 
                    name="pin"
                    value={userdata.pin}
                    onChange={handlChange}
                    required
                    />
                    
                  </div>


                  <div className="form-outline mb-4">
                   <label className="form-label" for="form3Example97">Mobile</label>
                    <input type="number" id="form3Example97" 
                    className="form-control form-control-lg" 
                    name="mobile"
                    value={userdata.mobile}
                    onChange={handlChange}
                    required
                    />
                    
                  </div>

                  <div className="form-outline mb-4">
                   <label className="form-label" for="form3Example97">email</label>
                    <input type="email" id="form3Example97" 
                    className="form-control form-control-lg" 
                    name="email"
                    value={userdata.email}
                    onChange={handlChange}
                    required
                    />
                    
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                   
                    <Button/>
                  </div>

               </div>
               </div>
               </div>
              


                
  </form>
  
</div>
   
	</>)
}
export default OrderForm;