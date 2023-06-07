import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {},{strict:false}
)

const Order= mongoose.model('Order', orderSchema)
export default Order