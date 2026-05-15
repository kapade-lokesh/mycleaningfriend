import { makeReviews } from "./utils/makeReviews";

//Full Home Cleaning Services
import FHCHERO from "./assets/FHC-images/FHCHERO.webp";
import FHCHERO2 from "./assets/FHC-images/FHCHERO2.webp";
import FHCROOM1 from "./assets/FHC-images/FHCROOM1.webp";
import FHCROOM2 from "./assets/FHC-images/FHCROOM2.webp";

//Sofa & Upholstery Cleaning
import SOFAMAIN from "./assets/Sofa-images/SOFAMAIN.webp";
import SOFA4 from "./assets/Sofa-images/SOFA4.webp";
import BED1 from "./assets/Sofa-images/BED1.webp";
import BED2 from "./assets/Sofa-images/BED2.webp";
import BED3 from "./assets/Sofa-images/BED3.webp";

//mini services
import MINI from "./assets/Mini/Mini.webp";

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
    secondtitle: "Furnished",
    scope:
      "Full Home Deep Cleaning, Kitchen Interior Cleaning, Windows Cleaning, Sofa Dry Vacuum, Bathroom Deep Cleaning, Balcony Cleaning",
    reviews: makeReviews(15),
    images: [FHCROOM1, FHCROOM2],
    mainImage: FHCHERO,
  },

  {
    id: "full_home",
    title: "Full Home Deep Cleaning",
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 3200 },
      { label: "2 BHK", price: 3899 },
      { label: "3 BHK", price: 4699 },
      { label: "4 BHK", price: 5899 },
      { label: "5 BHK", price: 7999 },
    ],
    secondtitle: "Unfurnished",
    scope:
      "Full Home Deep Cleaning, Kitchen Interior Cleaning, Windows Cleaning, Sofa Dry Vacuum, Bathroom Deep Cleaning, Balcony Cleaning",
    reviews: makeReviews(15),
    images: [FHCROOM1, FHCROOM2],
    mainImage: FHCHERO2,
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
      "Bungalow deep cleaning, Kitchen Interior Cleaning, Windows Cleaning, Sofa Dry Vacuum, Bathroom Deep Cleaning, Balcony Cleaning",
    reviews: makeReviews(12),
    images: [FHCROOM1, FHCROOM2],
    mainImage: WGMAIN,
  },

  {
    id: "office",
    title: "Office Cleaning",
    price: "12/sqft",
    pricePerSqft: 12, // ✅ numeric value
    unit: "sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Office Deep cleaning",
    reviews: makeReviews(15),
    images: [OFFICE1, OFFICE2, OFFICE3],
    mainImage: OFFICEMAIN,
  },

  {
    id: "shops",
    title: "Shops Cleaning",
    pricePerSqft: 14, // ✅ numeric value
    unit: "sqft",
    price: "14/sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Shops cleaning",
    reviews: makeReviews(12),
    images: [SHOPMAIN, SHOPMAIN],
    mainImage: SHOPMAIN,
  },

  {
    id: "mini",
    title: "Mini Services",
    //price: 190,
    rating: 4.6,
    scope: "Sofa Dry Vaccum & Sofa Wet Shampoo",
    // priceOptions: [
    //   { label: "5 Seater", price: 699 },
    //   { label: "7 Seater", price: 899 },
    //   { label: "10 Seater", price: 1199 },
    //   { label: "12 Seater", price: 1399 },
    // ],
    reviews: makeReviews(12),
    images: [SOFA4, BED1, BED2, BED3],
    mainImage: MINI,
  },
];

export const miniServiceData = [
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
    reviews: makeReviews(12),
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
    reviews: makeReviews(12),
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
    reviews: makeReviews(10),
    images: [BALCONY1, BALCONY2, BALCONY3],
    mainImage: BALCONYMAIN,
  },

  {
    id: "parking",
    title: "Parking Cleaning",
    price: "9/sqft",
    pricePerSqft: 9, // ✅ numeric value
    unit: "sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Parking Deep Cleaning",
    reviews: makeReviews(10),
    images: [PARK1, PARK2, PARK3],
    mainImage: PARKMAIN,
  },

  {
    id: "terrace",
    title: "Terrace Cleaning",
    price: "7/sqft",
    pricePerSqft: 7, // ✅ numeric value
    unit: "sqft",
    rating: 4.6,
    priceOptions: [],
    scope: "Terrace cleaning",
    reviews: makeReviews(10),
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
    reviews: makeReviews(10),
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
    reviews: makeReviews(12),
    images: [WG1, WG2, WG3, WG4],
    mainImage: WGMAIN,
  },
];
