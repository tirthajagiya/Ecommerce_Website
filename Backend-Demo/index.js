const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const userRoute = require("./routes/UserRoute");
const wishlistRoute = require("./routes/WishlistRoute");
const shopRoute = require("./routes/ShopRoute");
const productRoute = require("./routes/ProductRoute");
const orderRoute = require("./routes/OrderRoute");
const categoryRoute = require("./routes/CategoryRoute");
const cartRoute = require("./routes/CartRoute");
const bodyParser = require("body-parser");

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected To DB");

  const app = express();

  app.use(cors());

  app.use(bodyParser.json());

  app.use("/user", userRoute);
  app.use("/wishlist", wishlistRoute);
  app.use("/shop", shopRoute);
  app.use("/product", productRoute);
  app.use("/order", orderRoute);
  app.use("/category", categoryRoute);
  app.use("/cart", cartRoute);

  app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
  });
});