import { developmentImg, designImg, businessImg } from "../../assets";
const development = [
  {
    id: 1,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Trending",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: developmentImg.devOne,
  },
  {
    id: 2,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devTwo,
  },
  {
    id: 3,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devThree,
  },
  {
    id: 4,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: developmentImg.devFour,
  },
  {
    id: 5,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devSix,
  },
  {
    id: 6,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devFive,
  },
  {
    id: 7,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: developmentImg.devEight,
  },
  {
    id: 8,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devSeven,
  },
  {
    id: 9,
    title: "Web Development Masterclass & Certification",
    category: "Development",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: developmentImg.devSeven,
  },
];
const design = [
  {
    id: 1,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "Trending",
    initialPrice: false,
    tutor: "Robert Fox",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: designImg.designOne,
  },
  {
    id: 2,
    title: "Basic Food Photography",
    category: "Design",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designTwo,
  },
  {
    id: 3,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designThree,
  },
  {
    id: 4,
    title: "Basic Food Photography",
    category: "Design",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: designImg.designFour,
  },
  {
    id: 5,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designFive,
  },
  {
    id: 6,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designTwo,
  },
  {
    id: 7,
    title: "Basic Food Photography",
    category: "Design",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: designImg.designThree,
  },
  {
    id: 8,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designOne,
  },
  {
    id: 9,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designSix,
  },
];
const business = [
  {
    id: 1,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Trending",
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.busOne,
  },
  {
    id: 2,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busTwo,
  },
  {
    id: 3,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.designFour,
  },
  {
    id: 4,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.designFive,
  },
  {
    id: 5,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designFive,
  },
  {
    id: 6,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Business",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busOne,
  },
  {
    id: 7,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.busTwo,
  },
  {
    id: 8,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.designFive,
  },
  {
    id: 9,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busOne,
  },
];

const marketing = [
  {
    id: 1,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Trending",
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.busOne,
  },
  {
    id: 2,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busTwo,
  },
  {
    id: 3,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.designFour,
  },
  {
    id: 4,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.designFive,
  },
  {
    id: 5,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: designImg.designFive,
  },
  {
    id: 6,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Marketing",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busOne,
  },
  {
    id: 7,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Popular",
    initialPrice: false,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: false,
    image: businessImg.busTwo,
  },
  {
    id: 8,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Trending",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.designFive,
  },
  {
    id: 9,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "New",
    initialPrice: 30000,
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    discount: 50,
    image: businessImg.busOne,
  },
];

const allCourses = [...development, ...design, ...business, ...marketing];
export { development, design, business, marketing, allCourses };
