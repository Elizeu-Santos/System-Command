const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      maxlength: 500,
      trim: true,
    },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Number, required: true, min: 0, default: 0 },
    pictureUrl: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHRxeDJ6pufVnehSnIrq3_dd54g0qiRWlJl27uQnge88mNd0NeXEkxRZa_gvmKtLHngU&usqp=CAU",
      trim: true,
    },
  });

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
