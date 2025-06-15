import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
