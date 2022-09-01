import mongoose, { Document } from 'mongoose'

export type BannerDocument = Document & {
  image: string
  buttonText: string
  description: string
  product: string
  smallText: string
  midText: string
  largeText: string
  discount: number
  saleTime: string
}

const bannerSchema = new mongoose.Schema({
  image: String,
  buttonText: String,
  product: String,
  description: String,
  smallText: String,
  midText: String,
  largeText: String,
  discount: Number,
  saleTime: String,
})

const Banner = mongoose.model<BannerDocument>('Banner', bannerSchema)

// const bannerArr = [
//   {
//     image:
//       'https://res.cloudinary.com/defgcg7hn/image/upload/v1659954834/products/treatment/wash_go_rfpznl.jpg',
//     buttonText: 'Shop Now',
//     product: 'wash and go',
//     description: 'best wash and go combo',
//     smallText: 'Wash and Go',
//     midText: 'Winter Sale',
//     largeText: 'SMILE',
//     discount: 20,
//     saleTime: '01 Sep to 01 Oct',
//   },
// ]

// Banner.insertMany(bannerArr)

export default Banner
