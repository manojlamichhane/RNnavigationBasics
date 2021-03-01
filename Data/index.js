const Categories = [
  {
    catId: "C1",
    name: "Chineese",
    image: "https://i.ytimg.com/vi/dA_2BhYaBAA/maxresdefault.jpg",
  },
  {
    catId: "C2",
    name: "Italian",
    image:
      "https://lh3.googleusercontent.com/proxy/XTBkEg8zj5W3hgac9E2NHCL15Dgva8djO2Fn-Wh80LVqDmYd3T4XbLtMuq3_FLFICXJ8q5A39vy_c-3vVZoIX8B1_qVHlJXX-1HxcCpgu4AzAqRssQ",
  },
  {
    catId: "C3",
    name: "Mexican",
    image:
      "https://d3d7qmccklvqbw.cloudfront.net/wp-content/uploads/2019/02/20615907_1363609383687836_3017996246425703651_o-900x600.jpg",
  },
  {
    catId: "C4",
    name: "Indian",
    image:
      "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg",
  },
  {
    catId: "C5",
    name: "Nepali",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg",
  },
];
const Products = [
  {
    id: "1",
    title: "Hotpot",
    desc:
      "Hotpot is a “dish” to tell apart real Chinese food lovers. If you really appreciate hotpot rather than just ordering fired rice, chow mein, and dim sum all the time, you are truly a Chinese cuisine fan!",
    image:
      "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.jpg",
    category: "C1",
    price: "$15",
    rating: 4.0,
    meal: ["M1", "M2"],
  },
  {
    id: "2",
    title: "Sichuan Pork",
    desc:
      "Sichuan Pork, actually, poached spicy slices of pork is a famous Sichuan cuisine dish.",
    image:
      "https://images.chinahighlights.com/allpicture/2019/11/7b3afb974d7946bbbe397f7c_894x670.jpg",
    category: "C1",
    price: "$17",
    rating: 4.0,
    meal: ["M3", "M4"],
  },
  {
    id: "3",
    title: "Braised Pork Balls in Gravy",
    desc:
      "Braised pork balls in gravy are also known as “Chinese meatballs” (many of our clients call them this).",
    image:
      "https://images.chinahighlights.com/allpicture/2019/11/a47d9323b7ae409ba96e628d_894x596.jpg",
    category: "C1",
    price: "$15",
    rating: 3.5,
    meal: ["M3", "M1"],
  },
  {
    id: "4",
    title: "Pizza",
    desc:
      "Though a slab of flat bread served with oil and spices was around long before the unification Italy, there’s perhaps no dish that is as common or as representative of the country as the humble pizza.",
    image:
      "https://www.walksofitaly.com/blog/wp-content/uploads/2011/05/DSC_0195-768x510.jpg",
    category: "C2",
    price: "$25",
    rating: 4.0,
    meal: ["M1", "M2", "M3"],
  },
  {
    id: "5",
    title: "Bottarga",
    desc:
      "Smoked eggs from the rat of the sea. Wait, what? Don’t be put off by this rough description on an Italian delicacy because the other way to describe bottarga is “Sicilian Caviar”.",
    image:
      "https://www.seriouseats.com/2019/03/20190312-bottarga-vicky-wasik-pasta5-1500x1125.jpg",
    category: "C2",
    price: "$18",
    rating: 4.0,
    meal: ["M1", "M2", "M4"],
  },
  {
    id: "6",
    title: "Lasagna",
    desc:
      "Lasagna is a wide, flat pasta noodle, usually baked in layers in the oven.",
    image:
      "https://www.walksofitaly.com/blog/wp-content/uploads/2016/07/11735294004_b68f0ab3ef_k-768x512.jpg",
    category: "C2",
    price: "$25",
    rating: 4.0,
    meal: ["M4"],
  },
  {
    id: "7",
    title: "Chilaquiles",
    desc:
      "This popular traditional breakfast dish features lightly fried corn tortillas cut into quarters and topped with green or red salsa (the red is slightly spicier).",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chilaquiles-d90d64c.jpg?webp=true&quality=90&resize=620%2C310",
    category: "C3",
    price: "$20",
    rating: 4.0,
    meal: ["M2", "M4"],
  },
  {
    id: "8",
    title: "Tostadas",
    desc:
      "What should you do with stale tortillas? Why, fry them of course! Literally meaning toasted, tostadas are a simple but delicious dish involving corn tortillas fried in boiling oil until they become crunchy and golden.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/carb-tostadas-aec271b.jpg?webp=true&quality=90&resize=620%2C310",
    category: "C3",
    price: "$19",
    rating: 4.0,
    meal: ["M2", "M3"],
  },
  {
    id: "9",
    title: "Elote",
    desc:
      "You’ll find someone selling elote, the Mexican name for corn on the cob, on nearly every city street corner in Mexico.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/corn-on-the-cobs-dd5c99e.jpg?webp=true&quality=90&resize=620%2C310",
    category: "C3",
    price: "$35",
    rating: 4.5,
    meal: ["M3"],
  },
  {
    id: "10",
    title: "Murgh Makhani (Butter Chicken)",
    desc:
      "Murgh Makhani (butter chicken) is one of the top orders at any Indian restaurant in the West and for good reason—it is delicious.",
    image:
      "https://www.thespruceeats.com/thmb/kdJ6PSTpUOrMY5X-emab0g-CL40=/1728x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/authentic-butter-chicken-1957382-Hero-5b61b398c9e77c0050160f54.jpg",
    category: "C4",
    price: "$13",
    rating: 4.0,
    meal: ["M1", "M4"],
  },
  {
    id: "11",
    title: "Instant Pot Butter Chicken",
    desc:
      "If you love murgh makhani but don't have a lot of time, try Instant Pot butter chicken.",
    image:
      "https://www.thespruceeats.com/thmb/IH67SVTTP93tSa8eRRUe5GdL_VU=/1593x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/instant-pot-butter-chicken-final-2-5c2b9830c9e77c0001423e28.jpg",
    category: "C4",
    price: "$20",
    rating: 4.0,
    meal: ["M1", "M3"],
  },
  {
    id: "12",
    title: "Tandoori Chicken",
    desc:
      "It's hard to find anyone who doesn't fall in love with tandoori chicken, that famous Indian barbecue chicken recipe.",
    image:
      "https://www.thespruceeats.com/thmb/SxIRu8AgdaHqXYKo10Gc9D97D1g=/1643x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChickenTandooriSpruce-f238bf7413984e088268565c5b660b11.jpg",
    category: "C4",
    price: "$25",
    rating: 3.5,
    meal: ["M3"],
  },
  {
    id: "13",
    title: "Dal Bhat",
    desc:
      "This probably is the heaviest dish you will try in Nepal. This traditional meal is commonly cooked in the Nepali kitchen, thus you can call it a national dish.",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Dal-Bhat-818x1024.jpg",
    category: "C5",
    price: "$15",
    rating: 4.0,
    meal: ["M2", "M3"],
  },
  {
    id: "14",
    title: "Newari Khaja",
    desc:
      "Newari Khaja, also known as ‘Newari Bhoye’ and ‘Samai Baji’ is an ethnic food of the Newar community. ",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Newari-Khaja-Set.jpg",
    category: "C5",
    price: "$18",
    rating: 3.5,
    meal: ["M3", "M4"],
  },
  {
    id: "15",
    title: "Chatamari",
    desc:
      "Another newari item makes it to the list, and that is chatamari. Chatamari is made up of rice flour. A thick batter is made out of rice flour.",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Nepali-Chatamari-1024x700.jpg",
    category: "C5",
    price: "$17",
    rating: 4.0,
    meal: ["M1", "M2"],
  },
  {
    id: "16",
    title: "Momo",
    desc:
      "The must-try dish when you are in Nepal is the mouthwatering dumplings of momo. Momo is undoubtedly one of the favorite cuisines of Nepalese.",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Nepali-MoMo-819x1024.jpg",
    category: "C5",
    price: "$16",
    rating: 4.0,
    meal: ["M1", "M2", "M3", "M4"],
  },
];
const PopularProducts = [
  {
    id: "16",
    title: "Momo",
    desc:
      "The must-try dish when you are in Nepal is the mouthwatering dumplings of momo. Momo is undoubtedly one of the favorite cuisines of Nepalese.",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Nepali-MoMo-819x1024.jpg",
    category: "C5",
    price: "$13",
    rating: 4.5,
  },
  {
    id: "13",
    title: "Dal Bhat",
    desc:
      "This probably is the heaviest dish you will try in Nepal. This traditional meal is commonly cooked in the Nepali kitchen, thus you can call it a national dish.",
    image:
      "https://cdn.stunningnepal.com/wp-content/uploads/2019/11/Dal-Bhat-818x1024.jpg",
    category: "C5",
    price: "$15",
    rating: 4.0,
  },
];
const Meals = [
  {
    id: "M1",
    type: "BreakFast",
    image:
      "https://images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2-large-landscape-150.jpg",
  },
  {
    id: "M2",
    type: "Lunch",
    image: "https://fitfoodiefinds.com/wp-content/uploads/2020/01/sq-11.jpg",
  },
  {
    id: "M3",
    type: "Dinner",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2019/12/tandoori-trout-bb9fe6c.jpg?quality=90&resize=960,872",
  },
  {
    id: "M4",
    type: "Supper",
    image:
      "https://images.squarespace-cdn.com/content/v1/59921b7c49fc2bb221527a7e/1508876111268-9TPY7I5PT8JHEYHSJ4NB/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/supper+-+25.jpg?format=2500w",
  },
];
export { Categories, Products, PopularProducts, Meals };
