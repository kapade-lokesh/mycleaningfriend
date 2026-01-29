import { makeReviews } from "./utils/makeReviews";

export const servicesData = [
  {
    id: "full_home",
    title: 'Full Home Deep Cleaning <span class="fixed-rating">4000+</span>',
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 1999, ratingCount: 4500 },
      { label: "2 BHK", price: 2999 },
      { label: "3 BHK", price: 3999 },
      { label: "4 BHK", price: 4999 },
      { label: "5 BHK", price: 5999 },
    ],
    scope: "Full home deep cleaning",
    reviews: makeReviews("Home", 15),
    images: [
      "https://picsum.photos/id/1018/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1025/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "bungalow",
    title: 'Bungalow Deep Cleaning <span class="fixed-rating">4000+</span>',
    rating: 4.7,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Bungalow deep cleaning",
    reviews: makeReviews("Bungalow", 12),
    images: [
      "https://picsum.photos/id/102/600/400",
      "https://picsum.photos/id/103/600/400",
      "https://picsum.photos/id/104/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "sofa",
    title: "Sofa & Upholstery Cleaning",
    price: 499,
    rating: 4.6,
    scope: "Sofa cleaning",
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    reviews: makeReviews("Sofa", 12),
    images: [
      "https://picsum.photos/id/1060/600/400",
      "https://picsum.photos/id/1062/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "mattress",
    title: "Mattress & Carpet Cleaning",
    price: 599,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Mattress & carpet cleaning",
    reviews: makeReviews("Mattress", 12),
    images: [
      "https://picsum.photos/id/1076/600/400",
      "https://picsum.photos/id/1084/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "balcony",
    title: "Balcony Cleaning",
    price: 799,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Balcony cleaning",
    reviews: makeReviews("Balcony", 10),
    images: [
      "https://picsum.photos/id/1056/600/400",
      "https://picsum.photos/id/1059/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "parking",
    title: "Parking Cleaning",
    price: 999,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Parking cleaning",
    reviews: makeReviews("Parking", 10),
    images: [
      "https://picsum.photos/id/1043/600/400",
      "https://picsum.photos/id/1049/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "terrace",
    title: "Terrace Cleaning",
    price: 1499,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Terrace cleaning",
    reviews: makeReviews("Terrace", 10),
    images: [
      "https://picsum.photos/id/1011/600/400",
      "https://picsum.photos/id/1012/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
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
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Wall washing",
    reviews: makeReviews("Wall", 10),
    images: [
      "https://picsum.photos/id/1003/600/400",
      "https://picsum.photos/id/1005/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "window",
    title: "Window & Glass Cleaning",
    rating: 4.6,
    priceOptions: [
      { label: "Small", price: 250 },
      { label: "Big", price: 350 },
    ],
    scope: "Window & glass cleaning",
    reviews: makeReviews("Window", 12),
    images: [
      "https://picsum.photos/id/1033/600/400",
      "https://picsum.photos/id/1035/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "office",
    title: "Office & Shops Cleaning",
    price: 5000,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Office cleaning",
    reviews: makeReviews("Office", 15),
    images: [
      "https://picsum.photos/id/1019/600/400",
      "https://picsum.photos/id/1020/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },

  {
    id: "shops",
    title: "Shops Cleaning",
    price: 1299,
    rating: 4.6,
    priceOptions: [
      { label: "1 BHK", price: 4999 },
      { label: "2 BHK", price: 6999 },
      { label: "3 BHK", price: 8999 },
      { label: "4 BHK", price: 10999 },
      { label: "5 BHK", price: 12999 },
    ],
    scope: "Shops cleaning",
    reviews: makeReviews("Shops", 12),
    images: [
      "https://picsum.photos/id/1027/600/400",
      "https://picsum.photos/id/1028/600/400",
    ],
    mainImage: "https://picsum.photos/id/1018/600/400",
  },
];
