import React from "react";
import "./OurProducts.css";

const products = [
  {
    id: 1,
    name: "Organic Honey",
    image: "/Productimg/honey.jpg",
    description: "Pure farm-fresh honey collected from organic hives.",
    price: "150/-",
  },
  {
    id: 2,
    name: "Fresh Farm Eggs",
    image: "/Productimg/eggs.jpg",
    description: "Locally sourced organic eggs from free-range chickens.",
    price: "130/-",
  },
  {
    id: 3,
    name: "Handmade Cheese",
    image: "/Productimg/cheese.jpg",
    description: "Delicious handmade cheese made from fresh milk.",
    price: "500/-",
  },
  {
    id: 4,
    name: "Organic Vegetables",
    image: "/Productimg/vegetables.webp",
    description: "A variety of fresh, organic vegetables grown locally.",
    price: "200/-",
  },
  {
    id: 5,
    name: "Artisan Bread",
    image: "/Productimg/ArtisanBread.jpg",
    description: "Freshly baked bread with natural ingredients.",
    price: "150/-",
  },
  {
    id: 6,
    name: "Farm Fresh Milk",
    image: "/Productimg/milk.jpg",
    description: "Pure and fresh milk straight from the farm.",
    price: "100/-",
  },
  {
    id: 7,
    name: "Homemade Jam",
    image: "/Productimg/jam.jpg",
    description: "Delicious homemade jam with natural ingredients.",
    price: "175/-",
  },
  {
    id: 8,
    name: "Organic Tea",
    image: "/Productimg/tea1.jpg",
    description: "Handpicked organic tea leaves for a fresh taste.",
    price: "400/-",
  },
  {
    id: 9,
    name: "Natural Butter",
    image: "/Productimg/butter.webp",
    description: "Creamy farm-made butter with rich taste.",
    price: "350/-",
  },
  {
    id: 10,
    name: "Locally Grown Fruits",
    image: "/Productimg/fruits.jpeg",
    description: "Fresh and seasonal fruits sourced from local farms.",
    price: "250/-",
  },
];

const OurProducts = () => {
  return (
    <div className="products-container">
      <section className="description">
        <h1>Our Products</h1>
        <p>
          We take pride in offering high-quality, farm-fresh products sourced
          locally. Our goods are made with love, ensuring freshness and
          sustainability. From fresh dairy to organic vegetables, we bring you
          nature’s best!
        </p>
      </section>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
