import  Order from '../models/OrderModel.js'



const allOrder=(req,res,next)=>{
	Order.find({}).then((result)=>{
		
			res.status(200).json(result)
		
	})

}

const saveOrder=(req,res,next)=>{
	const {name,address,gender,product,pin,price,mobile,email}=req.body;
	
	const savedata=new Order({
		name,address,gender,product,pin,price,mobile,email
	})
	savedata.save();
		}
		
export {allOrder,saveOrder}