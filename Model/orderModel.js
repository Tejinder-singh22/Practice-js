
 
const mongoose  = require("mongoose");
const orderSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String
  }
}, {collection: 'Test_collection'})

const Order = mongoose.model("orderSchema", orderSchema)

module.exports = Order;
 