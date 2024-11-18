const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const brandRouter = require("./routes/brandRouter");

const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
