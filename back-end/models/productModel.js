const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: [{ type: String, require: true }],
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    demoUrl: {
      type: String,
      required: true,
    },
    images: [String],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Products", productsSchema);
