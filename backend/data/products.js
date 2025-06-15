const products = [
  {
    name: "Double BBQ Beefacon",
    image:
      "https://www.burgerking.com.my/upload/image/Product/14/BBQ%20Beefacon%20%28Double%29%20Ala%20Carte.png",
    description:
      "A double layer of flame-grilled beef patties topped with smoky beef bacon, fresh vegetables, and tangy BBQ sauce on a toasted sesame bun.",
    price: 6.99,
    rating: 4.5,
    numReviews: 12,
    availability: true,
    category: "burger",
  },
  {
    name: "Single Mushroom Swiss",
    image:
      "https://www.burgerking.com.my/upload/image/Product/11/BBQ%20Mushroom%20Swiss%20%28Single%29%20Ala%20Carte.png",
    description:
      "Juicy grilled beef patty smothered in melted Swiss cheese and sautéed mushrooms, served on a soft bun with creamy sauce.",
    price: 5.49,
    rating: 4.8,
    numReviews: 95,
    availability: true,
    category: "burger",
  },
  {
    name: "Double Cheeseburger",
    image:
      "https://www.burgerking.com.my/upload/image/Product/56/Cheeseburger%20%28Double%29%20Ala%20Carte.png",
    description:
      "Two flame-grilled beef patties stacked with layers of melty American cheese, pickles, ketchup, and mustard on a sesame bun.",
    price: 4.99,
    rating: 4.3,
    numReviews: 78,
    availability: true,
    category: "burger",
  },
  {
    name: "Angus Mushroom Burger",
    image:
      "https://www.burgerking.com.my/upload/image/Product/161/0-Mushroom%20Angus.png",
    description:
      "Premium Angus beef patty topped with Swiss cheese, savory mushrooms, and garlic aioli, all nestled in a gourmet bun.",
    price: 7.29,
    rating: 4.3,
    numReviews: 78,
    availability: true,
    category: "burger",
  },
  {
    name: "Fish'N Crisp",
    image:
      "https://www.burgerking.com.my/upload/image/Product/39/Fish%20N%20Crisp%20Ala%20Carte.png",
    description:
      "Crispy golden fish fillet with creamy tartar sauce and lettuce, served on a warm toasted bun.",
    price: 4.79,
    rating: 4.3,
    numReviews: 78,
    availability: true,
    category: "burger",
  },
  {
    name: "Beef Croissan'wich® with Egg",
    image:
      "https://www.burgerking.com.my/upload/image/Product/135/0-Beef%20Ala%20Carte.png",
    description:
      "Savory beef sausage layered with a fluffy egg and melted cheese on a buttery croissant bun — the perfect breakfast choice.",
    price: 4.59,
    rating: 4.3,
    numReviews: 78,
    availability: true,
    category: "burger",
  },
  {
    name: "Long Cheesy Onion Beef",
    image:
      "https://www.burgerking.com.my/upload/image/Product/116/Cheesy%20Onion%20Long%20Beef%20Ala%20Carte.png",
    description:
      "Long beef patty topped with rich cheese sauce, crispy onion rings, and smoky BBQ sauce in a soft hoagie-style bun.",
    price: 6.49,
    rating: 4.3,
    numReviews: 78,
    availability: true,
    category: "burger",
  },
  {
    name: "Angus Signature Burger",
    image:
      "https://www.burgerking.com.my/upload/image/Product/160/0-Signature%20Angus.png",
    description:
      "A gourmet Angus beef burger with sharp cheddar, caramelized onions, pickles, and zesty signature sauce on a brioche bun.",
    price: 7.99,
    rating: 4.0,
    numReviews: 65,
    availability: true,
    category: "burger",
  },
  {
    name: "Fully Loaded Croissant with Egg",
    image:
      "https://www.burgerking.com.my/upload/image/Product/104/0-J1004668_BREAKFAST%20WITH%20CROISSAN%27WICH%20%28FEB%2724%29%20-%20HOME%20DELIVERY%20SKU_Fully%20%20Loaded.png",
    description:
      "A breakfast croissant packed with egg, beef sausage, smoked bacon, and melted cheese — hearty and satisfying.",
    price: 5.99,
    rating: 4.7,
    numReviews: 110,
    availability: true,
    category: "burger",
  },
  {
    name: "Whopper",
    image:
      "https://www.burgerking.com.my/upload/image/Product/8/Whopper%20Ala%20Carte.png",
    description:
      "The iconic flame-grilled beef patty with tomatoes, lettuce, pickles, onions, ketchup, and mayo on a toasted sesame bun.",
    price: 5.99,
    rating: 4.6,
    numReviews: 89,
    availability: false,
    category: "burger",
  },
  {
    name: "Triple Whopper Jr with Cheese",
    image:
      "https://www.burgerking.com.my/upload/image/Product/126/Triple%20Whopper%20Junior%20with%20Cheese%20Ala%20Carte.png",
    description:
      "Three junior beef patties stacked high with American cheese, fresh veggies, and tangy sauces on a sesame bun.",
    price: 7.59,
    rating: 4.9,
    numReviews: 15,
    availability: true,
    category: "burger",
  },
  {
    name: "Supreme Nachos Deluxe Tendercrisp",
    image:
      "https://www.burgerking.com.my/upload/image/Product/127/Supreme%20Nachos%20Deluxe%20Tendercrisp%20Ala%20Carte.png",
    description:
      "Crispy Tendercrisp chicken fillet topped with nacho cheese, tortilla chips, lettuce, tomatoes, and spicy sauce.",
    price: 7.99,
    rating: 4.9,
    numReviews: 15,
    availability: true,
    category: "burger",
  },
  {
    name: "Fanta",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/9ea427079b175ad5ab49b837947eacb0f954c440-1333x1333.png?w=450&q=75&fit=max&auto=format",
    description:
      "Refreshing orange-flavored soda with a burst of fruity sweetness.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Coca-Cola",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/101884a72a37be6bc3f99d69a340ea09594c020c-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description: "The classic cola taste that perfectly complements any meal.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Latte",
    image:
      "https://www.burgerking.com.my/upload/image/Product/33/0-latte%20rea.png",
    description:
      "A smooth espresso blended with steamed milk for a creamy, warm drink.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Cappuccino",
    image:
      "https://www.burgerking.com.my/upload/image/Product/35/cappucino%20REAL.png",
    description:
      "A rich, bold espresso topped with a thick layer of frothed milk.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },

  {
    name: "Chocolate",
    image:
      "https://www.burgerking.com.my/upload/image/Product/121/Hot%20Chocolate.png",
    description: "A warm and comforting hot chocolate made with real cocoa.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Mocha",
    image:
      "https://www.burgerking.com.my/upload/image/Product/34/Hot%20Mocha.png",
    description:
      "A perfect blend of chocolate and espresso topped with milk foam.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Soaring Strawberry Lemonade",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/a893267db59420f64e09e56061445caa4e7402ab-1600x1600.png?w=350&q=75&fit=max&auto=format",
    description:
      "A sweet and tart frozen strawberry lemonade, perfect for cooling down.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Coke Float",
    image:
      "https://www.burgerking.com.my/upload/image/Product/133/Coke%20Float.png",
    description:
      "A fun twist of Coca-Cola topped with creamy vanilla ice cream.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Americano",
    image:
      "https://www.burgerking.com.my/upload/image/Product/32/0-americano.png",
    description:
      "Bold and smooth black coffee made with hot water and espresso.",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "MILO",
    image: "A chocolate malt drink loved for its rich and nourishing taste.",
    description:
      "Burger King’s Frozen Strawberry & NERDS® combines icy refreshing Frozen Strawberry with the crunchy, colorful, tangy NERDS® candy you love!",
    price: 2.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: " Water",
    image:
      "https://www.burgerking.com.my/upload/image/Product/25/Mineral%20Water.png",
    description: "Refreshing bottled mineral water to quench your thirst.",
    price: 1.0,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Sprite",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/6c69162041749e21fbdf9251ffb59be03195aa95-1333x1333.png?w=450&q=75&fit=max&auto=format",
    description: "A crisp lemon-lime soda that's light and bubbly.",
    price: 1.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Kaya Pandan Pie",
    image:
      "https://www.burgerking.com.my/upload/image/Product/162/0-kaya%20pandan%20pie.png",
    description:
      "A flaky pastry filled with sweet, creamy kaya pandan filling.",
    price: 1.89,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Viking’s Chocolate Sundae",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/f7464fe20f58748b8b0123eb8b6f49403e8fe32c-1600x1600.png?w=450&q=75&fit=max&auto=format",
    description:
      "Delicious chocolate sundae with rich fudge topping and soft serve.",
    price: 1.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Soft Serve Cone",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/004a93d5d1483dcaaac52e4dce82b9e10c524f16-1333x1333.png?w=450&q=75&fit=max&auto=format",
    description: "Classic creamy vanilla soft serve in a crunchy cone.",
    price: 1.56,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Chocolate Oreo® Shake",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/e66c0fb44f00d0a941e6099a03ef70f747203391-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "Creamy chocolate shake blended with crunchy Oreo® cookie pieces.",
    price: 3.79,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Classic Oreo® Shake",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ee76728a2c5fa88bd1ee8d7881639193bca13d5e-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "Vanilla shake blended with Oreo® cookie crumbles for a classic treat.",
    price: 1.29,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Banana Pie",
    image:
      "https://www.burgerking.com.my/upload/image/Product/119/Banana%20Pie.png",
    description: "Golden fried pastry filled with sweet banana puree.",
    price: 1.59,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "2 Chocolate Chip Cookies",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/99cfa5981db222a8092d80fe37c6e383571caf29-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description: "Freshly baked cookies loaded with melty chocolate chips.",
    price: 1.59,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Taro Pie",
    image:
      "https://www.burgerking.com.my/upload/image/Product/129/Taro%20Pie.png",
    description: "A sweet pastry filled with creamy taro filling.",
    price: 1.59,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Apple Pie",
    image:
      "https://www.burgerking.com.my/upload/image/Product/41/Apple%20Pie.png",
    description:
      "A crispy crust filled with warm, cinnamon-spiced apple filling.",
    price: 1.79,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Chocolate Sundae",
    image:
      "https://www.burgerking.com.my/upload/image/Product/132/Chocolate%20Sundae.png",
    description: "Classic vanilla soft serve topped with rich chocolate syrup.",
    price: 1.59,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Vanilla Soft Serve",
    image:
      "https://www.burgerking.com.my/upload/image/Product/131/Vanilla%20Soft%20Serve.png",
    description:
      "Simple and smooth vanilla soft serve, perfect for dessert lovers.",
    price: 1.89,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "HERSHEY’S® Sundae Pie",
    image:
      "https://www.burgerking.com.my/upload/image/Product/118/Hershey%20Pie.png",
    description:
      "Decadent chocolate pie with HERSHEY’S® fudge and a cookie crust.",
    price: 1.59,
    rating: 2,
    numReviews: 12,
    availability: true,
  },

  {
    name: "Crispy Fried Chicken",
    image:
      "https://www.burgerking.com.my/upload/image/Product/90/Crispy%20Fried%20Chicken.png",
    description: "Juicy chicken coated in a crispy, golden seasoned batter.",
    price: 2.79,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Snack Box",
    image:
      "https://www.burgerking.com.my/upload/image/Product/155/Snack%20Box.png",
    description:
      "A fun mix of bite-sized favorites perfect for snacking on-the-go.",
    price: 3.49,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Onion Rings",
    image:
      "https://www.burgerking.com.my/upload/image/Product/17/Onion%20Ring%205pcs.png",
    description:
      "Crispy golden onion rings fried to perfection with a savory crunch.",
    price: 3.99,
    rating: 2,
    numReviews: 12,
    availability: true,
  },
  {
    name: "Nuggets",
    image:
      "https://www.burgerking.com.my/upload/image/Product/21/Nuggets%206pcs.png",
    description:
      "Golden-fried, tender chicken nuggets with a crispy outside and juicy inside — perfect for dipping and sharing.",
    price: 3.49,
    rating: 4.3,
    numReviews: 125,
    availability: true,
    category: "sides",
  },
  {
    name: "French Fries",
    image:
      "https://www.burgerking.com.my/upload/image/Product/18/French%20Fries.png",
    description:
      "Classic golden fries — crispy on the outside, fluffy on the inside. The perfect salty snack or burger companion.",
    price: 2.49,
    rating: 4.5,
    numReviews: 220,
    availability: true,
    category: "sides",
  },
  {
    name: "Cheesy Fries",
    image:
      "https://www.burgerking.com.my/upload/image/Product/31/Cheesy%20Fries.png",
    description:
      "Our signature fries smothered in warm, creamy cheese sauce — melty, savory, and irresistible.",
    price: 3.29,
    rating: 4.6,
    numReviews: 98,
    availability: true,
    category: "sides",
  },
  {
    name: "Mozzarella Cheese Sticks",
    image:
      "https://www.burgerking.com.my/upload/image/Product/134/Mozzarella%20Cheese%20Stick%205pc.png",
    description:
      "Crispy on the outside and gooey on the inside — our mozzarella sticks are the ultimate cheesy snack.",
    price: 3.99,
    rating: 4.4,
    numReviews: 67,
    availability: true,
    category: "sides",
  },
  {
    name: "Potato Bites",
    image:
      "https://www.burgerking.com.my/upload/image/Product/141/0-Croissanwich%20Potato%20Bites%20Ala%20Carte.png",
    description:
      "Bite-sized, crispy hash brown potato bites — perfect for snacking any time of day.",
    price: 2.99,
    rating: 4.2,
    numReviews: 54,
    availability: true,
    category: "sides",
  },
  {
    name: "Medium Have-sies",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/6c8242020ecd11a0b76994c020ad658a09ccdf17-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "The best of both worlds — half classic fries, half crispy onion rings. A perfect crunchy combo.",
    price: 3.79,
    rating: 4.5,
    numReviews: 43,
    availability: true,
    category: "sides",
  },
  {
    name: "BBQ Dipping Sauce",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/0c3db3245add55e018c6e8b09d3a0fec896cdaec-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "Sweet, smoky BBQ dipping sauce — pairs perfectly with nuggets, fries, and more.",
    price: 0.59,
    rating: 4.1,
    numReviews: 34,
    availability: true,
    category: "sauce",
  },
  {
    name: "Buffalo Dipping Sauce",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/6e344b5dadffde79abdb53a0e20cca4799961b60-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "Spicy and tangy buffalo sauce that adds a fiery kick to your favorite sides.",
    price: 0.59,
    rating: 4.2,
    numReviews: 28,
    availability: true,
    category: "sauce",
  },
  {
    name: "Honey Mustard Dipping Sauce",
    image:
      "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1aed4dfa8a52fbb76ed5e7024521da08a5d78393-1333x1333.png?w=350&q=75&fit=max&auto=format",
    description:
      "A creamy, tangy honey mustard blend — slightly sweet, slightly sharp, totally tasty.",
    price: 0.59,
    rating: 4.3,
    numReviews: 31,
    availability: true,
    category: "sauce",
  },
];

export default products;
