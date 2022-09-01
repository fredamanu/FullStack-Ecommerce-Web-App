import mongoose, { Document } from 'mongoose'
import { ProductDocument, productSchema } from './Product'

export type BestSellerDocument = Document & {
  product: ProductDocument
}

const bestSellerSchema = new mongoose.Schema({
  product: {
    type: productSchema,
    require: true,
  },
})

const BestSeller = mongoose.model<BestSellerDocument>(
  'BestSeller',
  bestSellerSchema
)

// const arr = [
//   {
//     product: {
//       name: 'moisture',
//       image:
//         'https://res.cloudinary.com/defgcg7hn/image/upload/v1659885762/products/hairproducts/moisture_gz2mxx.jpg',
//       price: 14.99,
//       benefits:
//         'The Moisture Treatment deeply hydrates the hair strand from root to end It adds silkiness, malleability, and smoothness. Its soothing, moisture-locking formulation is made with glacial water, pro-vitamin B5, sweet almond, grapeseed, olive, and coconut oils. It contains a combination of lavender and lemon essential oils that give it its scent',
//       ingredients:
//         'Purified Water, Cetearyl Alcohol, Vegetable Glycerin, Coconut (Cocos Nucifera) Oil, Pro-Vitamin B5 (Panthenol), Hydrolysed Wheat Protein, Vitus Vinifera (Grape) Seed Oil, Sucrose, Olive Oil (Olea Europaea), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Lavandula Angustifolia (Lavender) Oil, Citrus Medica Limonum (Lemon) Oil, Benzyl Alcohol, Salicylic Acid, Sorbic Acid',
//       suggestedUse:
//         'After you shampoo your hair and rinse it off, spread the mask throughout your damp hair and wait for 7 to 20 minutes. Rinse off and condition your hair to seal the cuticles and trap the treatment in the strands',
//       disclosure:
//         "Vegan, Cruelty Free, Sulphate Free, Parabens Free, Silicons Free, Petrochemicals Free, Phthalates Free, PEG's MEA's, TEA's, DEA's Free, Artificial Fragrance Free, Coloring Free",
//     },
//   },

//   {
//     product: {
//       name: 'butter',
//       image:
//         'https://res.cloudinary.com/defgcg7hn/image/upload/v1659885762/products/hairproducts/butter_m4x1pk.jpg',
//       price: 14.95,
//       benefits:
//         'A moisturising hair butter made with three (3) awesome butters, shea, mango and cocoa butter for deeper hair shaft penetration. Good for chronically dry hair, helps to seal in moisture and a good styler for braids, twists and more',
//       ingredients:
//         'Water, Shea Butter, Mango Butter, Cocoa Butter, Cetearyl Alcohol, Cocos Nucifera (Coconut) Oil, Avocado Oil, Sweet Almond Oil, Glycerin,  Castor Oil, Phenoxyethanol, Honey, Simmondsia Chinensis (Jojoba) Seed Oil, Aminomethyl Propanol, Hydrolyzed Keratin, Iodopropynyl Butylcarbamate, Linalool, Butylphenyl Methylpropional, Hexyl Cinnamal, Alpha-Isomethyl Ionone, Coumarin, Geraniol, Hydroxycitronellal, Citronellol, Yellow 5 (CI 19140)',
//       suggestedUse:
//         'Apply a small amount in hand, rub palms together and apply all over hair, especially concentrating on the ends. With a wide tooth comb or soft bristle brush, gently comb or brush through hair',
//       disclosure:
//         "Vegan, Cruelty Free, Sulphate Free, Parabens Free, Silicons Free, Petrochemicals Free, Phthalates Free, PEG's MEA's, TEA's, DEA's Free, Artificial Fragrance Free, Coloring Free",
//     },
//   },

//   {
//     product: {
//       name: 'leave in',
//       size: 6,
//       image:
//         'https://res.cloudinary.com/defgcg7hn/image/upload/v1659885762/products/hairproducts/leavein_nxzyup.jpg',
//       price: 18.95,
//       benefits:
//         'A moisture and repair balanced deep conditioner for regular use. Strenghtens weak damaged hair and locks in moisture for shinier touchably soft hair',
//       ingredients:
//         'Distilled Water(Aqua), Vegetable Glycerin, Hydrolyzed Oats Powder, Cetyl Alcohol, Cetearyl Alcohol, Behentrimonium Methosulphate, Glyceryl Stearate, Polyglyceryl -6 Palmitate, Avocado Butter, Sweet Almond Oil, Vitamin E, Panthenol, Aloe Vera Juice, Green Tea Extract, Cymbopogon Flexuosus (Lemongrass) Oil, Salvia Sclarea(Clary) Oil, Benzyl Alcohol, Citric Acid, Dehydroacetic Acid',
//       suggestedUse:
//         'After the shower, remove excess water gently with a soft towel and detangle with a wide-toothed comb. Apply a small amount to your hands and run them through your hair to spread the product evenly. Let hair dry',
//       disclosure:
//         "Vegan, Cruelty Free, Sulphate Free, Parabens Free, Silicons Free, Petrochemicals Free, Phthalates Free, PEG's MEA's, TEA's, DEA's Free, Artificial Fragrance Free, Coloring Free",
//     },
//   },
// ]

// BestSeller.insertMany(arr)

export default BestSeller
