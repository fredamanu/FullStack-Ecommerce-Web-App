import mongoose, { Document } from 'mongoose'

export type ReviewDocument = Document & {
  name: string
  rating: number
  titleOfReview: string
  comment: string
  user: string
}

export type ProductDocument = Document & {
  name: string
  image: string
  benefits: string
  ingredients: string
  suggestedUse: string
  disclosure: string
  reviews: ReviewDocument[]
  rating: number
  numOfReviews: number
  price: number
  size: number
  countInStock: number
}

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    require: true,
    default: 0,
  },
  titleOfReview: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
})

export const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },

    benefits: {
      type: String,
      require: true,
    },
    ingredients: {
      type: String,
      require: true,
    },
    suggestedUse: {
      type: String,
      require: true,
    },
    disclosure: {
      type: String,
      require: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      require: true,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    size: {
      type: Number,
      require: true,
      default: 8,
    },
    countInStock: {
      type: Number,
      default: 0,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model<ProductDocument>('Product', productSchema)

export default Product
