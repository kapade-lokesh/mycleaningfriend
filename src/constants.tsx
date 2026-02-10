import { makeReviews } from "./utils/makeReviews";

//Full Home Cleaning Services
import FHCHERO from "./assets/FHC-images/FHCHERO.webp";
import FHCROOM1 from "./assets/FHC-images/FHCROOM1.webp";
import FHCROOM2 from "./assets/FHC-images/FHCROOM2.webp";

//Sofa & Upholstery Cleaning
import SOFAMAIN from "./assets/Sofa-images/SOFAMAIN.webp";
import SOFA4 from "./assets/Sofa-images/SOFA4.webp";
import BED1 from "./assets/Sofa-images/BED1.webp";
import BED2 from "./assets/Sofa-images/BED2.webp";
import BED3 from "./assets/Sofa-images/BED3.webp";

//Mattress & Carpet Cleaning
import MATTRESSMAIN from "./assets/Mattress-Images/Mattress-main.webp";
import MATTRESS1 from "./assets/Mattress-Images/Mattress-1.webp";
import MATTRESS2 from "./assets/Mattress-Images/Mattress-2.webp";
import MATTRESS3 from "./assets/Mattress-Images/Mattress-3.webp";

//Balcony Cleaning
import BALCONYMAIN from "./assets/Balcony-images/Balcony-main.webp";
import BALCONY1 from "./assets/Balcony-images/Balcony-1.webp";
import BALCONY2 from "./assets/Balcony-images/Balcony-2.webp";
import BALCONY3 from "./assets/Balcony-images/Balcony-3.webp";

//Parking Cleaning
import PARKMAIN from "./assets/Parking-images/Parking-Main.webp";
import PARK1 from "./assets/Parking-images/Parking-1.webp";
import PARK2 from "./assets/Parking-images/Parking-2.webp";
import PARK3 from "./assets/Parking-images/Parking-3.webp";

//Terrace Cleaning
import TERAMAIN from "./assets/Terrace-images/Terrace-Main.webp";
import TERA1 from "./assets/Terrace-images/Terrace-1.webp";
import TERA2 from "./assets/Terrace-images/Terrace-2.webp";
import TERA3 from "./assets/Terrace-images/Terrace-3.webp";

//Wall Wash
import WALLMAIN from "./assets/Wallwash-images/WallWash-Main.webp";
import WALL1 from "./assets/Wallwash-images/WallWash-1.webp";
import WALL2 from "./assets/Wallwash-images/WallWash-2.webp";
import WALL3 from "./assets/Wallwash-images/WallWash-3.webp";
import WALL4 from "./assets/Wallwash-images/WallWash-4.webp";

//Window & Glass Cleaning
import WGMAIN from "./assets/WindowGlass-images/Window-Main.webp";
import WG1 from "./assets/WindowGlass-images/Window-1.webp";
import WG2 from "./assets/WindowGlass-images/Window-2.webp";
import WG3 from "./assets/WindowGlass-images/Window-3.webp";
import WG4 from "./assets/WindowGlass-images/Window-4.webp";

//Office Cleaning
import OFFICEMAIN from "./assets/Office-Images/Office-Main.webp";
import OFFICE1 from "./assets/Office-Images/Office-1.webp";
import OFFICE2 from "./assets/Office-Images/Office-2.webp";
import OFFICE3 from "./assets/Office-Images/Office-3.webp";

//Shops Cleaning
import SHOPMAIN from "./assets/Shops-images/Shop-Main.webp";

// export const servicesData = [
//   {
//     id: "full_home",
//     title: 'Full Home Deep Cleaning <span class="fixed-rating">4000+</span>',
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 1999, ratingCount: 4500 },
//       { label: "2 BHK", price: 2999 },
//       { label: "3 BHK", price: 3999 },
//       { label: "4 BHK", price: 4999 },
//       { label: "5 BHK", price: 5999 },
//     ],
//     scope: "Full home deep cleaning",
//     reviews: makeReviews("Home", 15),
//     images: [
//       "https://picsum.photos/id/1018/600/400",
//       "https://picsum.photos/id/1015/600/400",
//       "https://picsum.photos/id/1025/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "bungalow",
//     title: 'Bungalow Deep Cleaning <span class="fixed-rating">4000+</span>',
//     rating: 4.7,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Bungalow deep cleaning",
//     reviews: makeReviews("Bungalow", 12),
//     images: [
//       "https://picsum.photos/id/102/600/400",
//       "https://picsum.photos/id/103/600/400",
//       "https://picsum.photos/id/104/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "sofa",
//     title: "Sofa & Upholstery Cleaning",
//     price: 499,
//     rating: 4.6,
//     scope: "Sofa cleaning",
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     reviews: makeReviews("Sofa", 12),
//     images: [
//       "https://picsum.photos/id/1060/600/400",
//       "https://picsum.photos/id/1062/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "mattress",
//     title: "Mattress & Carpet Cleaning",
//     price: 599,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Mattress & carpet cleaning",
//     reviews: makeReviews("Mattress", 12),
//     images: [
//       "https://picsum.photos/id/1076/600/400",
//       "https://picsum.photos/id/1084/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "balcony",
//     title: "Balcony Cleaning",
//     price: 799,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Balcony cleaning",
//     reviews: makeReviews("Balcony", 10),
//     images: [
//       "https://picsum.photos/id/1056/600/400",
//       "https://picsum.photos/id/1059/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "parking",
//     title: "Parking Cleaning",
//     price: 999,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Parking cleaning",
//     reviews: makeReviews("Parking", 10),
//     images: [
//       "https://picsum.photos/id/1043/600/400",
//       "https://picsum.photos/id/1049/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "terrace",
//     title: "Terrace Cleaning",
//     price: 1499,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Terrace cleaning",
//     reviews: makeReviews("Terrace", 10),
//     images: [
//       "https://picsum.photos/id/1011/600/400",
//       "https://picsum.photos/id/1012/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "wall",
//     title: "Wall Wash",
//     price: 59,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Wall washing",
//     reviews: makeReviews("Wall", 10),
//     images: [
//       "https://picsum.photos/id/1003/600/400",
//       "https://picsum.photos/id/1005/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "window",
//     title: "Window & Glass Cleaning",
//     rating: 4.6,
//     priceOptions: [
//       { label: "Small", price: 250 },
//       { label: "Big", price: 350 },
//     ],
//     scope: "Window & glass cleaning",
//     reviews: makeReviews("Window", 12),
//     images: [
//       "https://picsum.photos/id/1033/600/400",
//       "https://picsum.photos/id/1035/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "office",
//     title: "Office & Shops Cleaning",
//     price: 5000,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Office cleaning",
//     reviews: makeReviews("Office", 15),
//     images: [
//       "https://picsum.photos/id/1019/600/400",
//       "https://picsum.photos/id/1020/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },

//   {
//     id: "shops",
//     title: "Shops Cleaning",
//     price: 1299,
//     rating: 4.6,
//     priceOptions: [
//       { label: "1 BHK", price: 4999 },
//       { label: "2 BHK", price: 6999 },
//       { label: "3 BHK", price: 8999 },
//       { label: "4 BHK", price: 10999 },
//       { label: "5 BHK", price: 12999 },
//     ],
//     scope: "Shops cleaning",
//     reviews: makeReviews("Shops", 12),
//     images: [
//       "https://picsum.photos/id/1027/600/400",
//       "https://picsum.photos/id/1028/600/400",
//     ],
//     mainImage: "https://picsum.photos/id/1018/600/400",
//   },
// ];

export const servicesData = [
  {
    id: "full_home",
    title: "Full Home Deep Cleaning",
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 3899 },
      { label: "2 BHK", price: 4899 },
      { label: "3 BHK", price: 6399 },
      { label: "4 BHK", price: 7899 },
      { label: "5 BHK", price: 9999 },
    ],
    scope:
      "Full Home Deep Cleaning, Kitchen Interior Cleaning, Chimney Cleaning, Sofa Dry Vacuum, Bathroom Deep Cleaning, Balcony Cleaning",
    reviews: makeReviews("Home", 15),
    images: [FHCROOM1, FHCROOM2],
    mainImage: FHCHERO,
  },

  {
    id: "bungalow",
    title: "Bungalow Deep Cleaning",
    rating: 4.7,
    priceOptions: [
      { label: "1 BHK", price: 4399 },
      { label: "2 BHK", price: 5499 },
      { label: "3 BHK", price: 7499 },
      { label: "4 BHK", price: 8999 },
      { label: "5 BHK", price: 10999 },
    ],
    scope:
      "Bungalow deep cleaning, Kitchen Interior Cleaning, Chimney Cleaning, Sofa Dry Vacuum, Bathroom Deep Cleaning, Balcony Cleaning",
    reviews: makeReviews("Bungalow", 12),
    images: [FHCROOM1, FHCROOM2],
    mainImage: FHCHERO,
  },

  {
    id: "sofa",
    title: "Sofa & Upholstery Cleaning",
    price: 190,
    rating: 4.6,
    scope: "Sofa Dry Vaccum & Sofa Wet Shampoo",
    priceOptions: [
      { label: "5 Seater", price: 699 },
      { label: "7 Seater", price: 899 },
      { label: "10 Seater", price: 1199 },
      { label: "12 Seater", price: 1399 },
    ],
    reviews: makeReviews("Sofa", 12),
    images: [SOFA4, BED1, BED2, BED3],
    mainImage: SOFAMAIN,
  },

  {
    id: "mattress",
    title: "Mattress & Carpet Cleaning",
    price: 599,
    rating: 4.6,
    priceOptions: [
      { label: "Single Bed", price: 599 },
      { label: "Double Bed", price: 699 },
    ],
    scope: "Mattress Wet Shampoo",
    reviews: makeReviews("Mattress", 12),
    images: [MATTRESS1, MATTRESS2, MATTRESS3],
    mainImage: MATTRESSMAIN,
  },

  {
    id: "balcony",
    title: "Balcony Cleaning",
    price: 499,
    rating: 4.6,
    priceOptions: [
      { label: "Balcony Small (upto 3ft)", price: 499 },
      { label: "Balcony Big", price: "599" },
    ],
    scope: "Balcony cleaning",
    reviews: makeReviews("Balcony", 10),
    images: [BALCONY1, BALCONY2, BALCONY3],
    mainImage: BALCONYMAIN,
  },

  {
    id: "parking",
    title: "Parking Cleaning",
    price: "9/sqft",
    rating: 4.6,
    priceOptions: [{ label: "Rs 9/sqft" }],
    scope: "Parking Deep Cleaning",
    reviews: makeReviews("Parking", 10),
    images: [PARK1, PARK2, PARK3],
    mainImage: PARKMAIN,
  },

  {
    id: "terrace",
    title: "Terrace Cleaning",
    price: "7/sqft",
    rating: 4.6,
    priceOptions: [{ label: "Rs7/sqft", price: "" }],
    scope: "Terrace cleaning",
    reviews: makeReviews("Terrace", 10),
    images: [TERA1, TERA2, TERA3],
    mainImage: TERAMAIN,
  },

  {
    id: "wall",
    title: "Wall Wash",
    price: 59,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 11999 },
      { label: "5 BHK", price: 14999 },
    ],
    scope: "Wall Wet Shampoo Wash",
    reviews: makeReviews("Wall", 10),
    images: [WALL1, WALL2, WALL3, WALL4],
    mainImage: WALLMAIN,
  },

  {
    id: "window",
    title: "Window & Glass Cleaning",
    price: 59,
    rating: 4.6,
    priceOptions: [
      { label: "Small", price: 250 },
      { label: "Big", price: 350 },
    ],
    scope: "Window & glass cleaning, Windows Track cleaning, Grill Cleaning",
    reviews: makeReviews("Window", 12),
    images: [WG1, WG2, WG3, WG4],
    mainImage: WGMAIN,
  },

  {
    id: "office",
    title: "Office Cleaning",
    price: "12/sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Office Deep cleaning",
    reviews: makeReviews("Office", 15),
    images: [OFFICE1, OFFICE2, OFFICE3],
    mainImage: OFFICEMAIN,
  },

  {
    id: "shops",
    title: "Shops Cleaning",
    price: "15/sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Shops cleaning",
    reviews: makeReviews("Shops", 12),
    images: [
      "https://picsum.photos/id/1027/600/400",
      "https://picsum.photos/id/1028/600/400",
    ],
    mainImage: SHOPMAIN,
  },
];
