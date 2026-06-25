
import tomato from "../assets/images/vegetables/tomato.png";
import carrot from "../assets/images/vegetables/carrot.png";
import cabbage from "../assets/images/vegetables/cabbage.png";
import brinjal from "../assets/images/vegetables/brinjal.png";
import bitterguard from "../assets/images/vegetables/bitter guard.png";
import greenchilli from "../assets/images/vegetables/green chilli.png";
import garlic from "../assets/images/vegetables/garlic.png";
import ladiesfinger from "../assets/images/vegetables/ladies finger.png";
import potato from "../assets/images/vegetables/potato.png";
import SpringOnions from "../assets/images/vegetables/spring onions.png";
import onion from "../assets/images/vegetables/onion.png";


import Banana from "../assets/images/fruits/Banana.png";
import Cucumber from "../assets/images/fruits/cucumber.png";
import Grapes from "../assets/images/fruits/grapes.png";
import GreenApple from "../assets/images/fruits/green apple.png";
import Jackfruit from "../assets/images/fruits/jackfruit.png";
import Orange from "../assets/images/fruits/orange.png";
import Papaya from "../assets/images/fruits/papaya.png";
import PineApple from "../assets/images/fruits/pineapple.png";
import RedApple from "../assets/images/fruits/red apple.png";
import Watermelon from "../assets/images/fruits/watermelon.png";
import Lemon from "../assets/images/fruits/lemon.png";

import Bonelessmutton from "../assets/images/Meats&seafoods/bonelessmutton.png";
import Chicken from "../assets/images/Meats&seafoods/chicken.png";
import Chickenleg from "../assets/images/Meats&seafoods/chickenleg.png";
import Fish from "../assets/images/Meats&seafoods/fish.png";
import Goatmeat from "../assets/images/Meats&seafoods/goatmeat.png";
import Grab from "../assets/images/Meats&seafoods/grab.png";
import Mutton from "../assets/images/Meats&seafoods/mutton.png";
import Prawn from "../assets/images/Meats&seafoods/prawn.png";
import Salmonfish from "../assets/images/Meats&seafoods/salmonfish.png";

import Milk from "../assets/images/dairy products/milk.png";
import Butter from "../assets/images/dairy products/butter.png";
import Cheese from "../assets/images/dairy products/cheese.png";
import Curd from "../assets/images/dairy products/curd.png";
import Milkpowder from "../assets/images/dairy products/milkpowder.png";
import Yogurt from "../assets/images/dairy products/yogurt.png";
import Panner from "../assets/images/dairy products/panner.png";
import cowmilk from "../assets/images/dairy products/cowmilk.png";
import Ghee from "../assets/images/dairy products/Ghee.png";


const products = [
  
  {
  id: 1,
  name: "Tomato",
  price: 89,
  category: "vegetables",
  image: tomato,
  description:
    "Fresh tomatoes are rich in vitamins and perfect for salads, soups, curries, and daily cooking.",
  reviews: [
    {
      name: "Priya",
      comment: "Tomatoes were fresh and neatly packed.",
      rating: "★★★★★",
    },
    {
      name: "Rahul",
      comment: "Good quality and delivered on time.",
      rating: "★★★★★",
    },
  ],
},

{
  id: 23,
  name: "Milk",
  price:55 ,
  category: "dairy",
  image: Milk,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },


  

  {
    id: 2,
  name: "Carrot",
  price: 89,
  category: "vegetables",
  image: carrot,
  description:
    "Fresh carrots are rich in vitamins and perfect for salads, soups, curries, and daily cooking.",
  reviews: [
    {
      name: "Priya",
      comment: "Carrots were fresh and neatly packed.",
      rating: "★★★★★",
    },
    {
      name: "Rahul",
      comment: "Good quality and delivered on time.",
      rating: "★★★★★",
    },
  ],
  },

  
{
  id: 32,
  name: "Chicken",
  price:280 ,
  category: "meat",
  image: Chicken,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },



    {
  id: 3,
  name: "Brinjal",
  price: 89,
  category: "vegetables",
  image: brinjal,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
},
  
{
  id: 37,
  name: "Prawn",
  price:400 ,
  category: "meat",
  image: Prawn,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 4,
  name: "Cabbage",
  price:60 ,
  category: "vegetables",
  image: cabbage,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 5,
  name: "Bitter Guard",
  price:65 ,
  category: "vegetables",
  image: bitterguard,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 6,
  name: "Garlic",
  price:200 ,
  category: "vegetables",
  image: garlic,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 7,
  name: "Green Chilli",
  price:30 ,
  category: "vegetables",
  image: greenchilli,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 8,
  name: "Ladies Finger",
  price:60 ,
  category: "vegetables",
  image: ladiesfinger,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 9,
  name: "Onion",
  price:60 ,
  category: "vegetables",
  image: onion,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 10,
  name: "Potato",
  price:60 ,
  category: "vegetables",
  image: potato,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 11,
  name: "Spring Onions",
  price:100 ,
  category: "vegetables",
  image: SpringOnions,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 12,
  name: "Banana",
  price:80 ,
  category: "fruits",
  image: Banana,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 13,
  name: "Orange",
  price:180 ,
  category: "fruits",
  image: Orange,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 14,
  name: "Green Apple",
  price:280 ,
  category: "fruits",
  image: GreenApple,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    
    id: 15,
  name: "Grapes",
  price:100 ,
  category: "fruits",
  image: Grapes,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    
    id: 16,
  name: "Red Apple",
  price:300 ,
  category: "fruits",
  image: RedApple,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },
  

  {
    
    id: 17,
  name: "Pappaya",
  price:70 ,
  category: "fruits",
  image: Papaya,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },
  

{
   id: 18,
  name: "Pine Aapple",
  price:220 ,
  category: "fruits",
  image: PineApple,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
   id: 19,
  name: "Watermelon",
  price:50 ,
  category: "fruits",
  image: Watermelon,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 20,
  name: "Lemon",
  price:60 ,
  category: "fruits",
  image: Lemon,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 21,
  name: "Jack Fruit",
  price:90 ,
  category: "fruits",
  image: Jackfruit,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 22,
  name: "Cucumber",
  price:30 ,
  category: "fruits",
  image: Cucumber,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },



  {
  id: 24,
  name: "Curd",
  price:40 ,
  category: "dairy",
  image: Curd,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

{
  id: 25,
  name: "Cheese",
  price:50 ,
  category: "dairy",
  image: Cheese,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 26,
  name: "Ghee",
  price:200 ,
  category: "dairy",
  image: Ghee,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 27,
  name: "panner",
  price:210 ,
  category: "dairy",
  image: Panner,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
    id: 28,
  name: "Yogurt",
  price:70 ,
  category: "dairy",
  image: Yogurt,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {

id: 29,
  name: "Milk Powder",
  price:60 ,
  category: "dairy",
  image: Milkpowder,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

{
  id: 30,
  name: "Cheese",
  price:50 ,
  category: "dairy",
  image: Cheese,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
  id: 31,
  name: "Butter",
  price:50 ,
  category: "dairy",
  image: Butter,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },




  {
  id: 33,
  name: "Fish",
  price:200 ,
  category: "meat",
  image: Fish,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
  id: 34,
  name: " Fresh Goat Meat",
  price:1000 ,
  category: "meat",
  image: Goatmeat,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },
{
  id: 35,
  name: " Sea Grab",
  price:400,
  category: "meat",
  image: Grab,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
  id: 36,
  name: "Mutton",
  price:1000 ,
  category: "meat",
  image: Mutton,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

{
  id: 38,
  name: "Salmon Fish",
  price:600 ,
  category: "meat",
  image: Salmonfish,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },
{
  id: 39,
  name: "Boneless Mutton",
  price:1400 ,
  category: "meat",
  image: Bonelessmutton,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },

  {
  id: 40,
  name: "Chicken Leg",
  price:300 ,
  category: "meat",
  image: Chickenleg,
  subtitle: "Farm Fresh Quality",
  description: "Fresh and high-quality product sourced from trusted suppliers. Carefully packed to maintain freshness and nutrition.",
  reviews: [
    {
    name: "Priya",
    comment: "The product was fresh and neatly packed.",
    rating: "★★★★★",
  },
  {
    name: "Rahul",
    comment: "Good quality and delivered on time.",
    rating: "★★★★★",
  },
  ],
  },



];


export default products;

