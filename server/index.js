const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
// sever side
const mongoose = require("mongoose");
// const mongoUrl = "mongodb://localhost:27017/frontend_teach";

const mongoUrl =
  "mongodb+srv://ijorayev544:uMjnoAIiphDSlL4d@cluster0.alihx2k.mongodb.net/frontend_teach";

// const sa =
//   "mongodb+srv://idasturjs:WJlkFeACzKTDk6ls@cluster0.u2txy.mongodb.net/idasturShop";
// image
// const multerFile = require("./middleware/multer");
// const multerVideos = require("./middleware/multerVideos");
// app.use("/images", express.static(path.join(__dirname, "images")));
// app.use("/videos", express.static(path.join(__dirname, "videos")));

// cors
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));
// the end

// app use plugins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(multerFile.single("avatar"));
// the end

app.use("/documention", require("./routers/documentation"));
app.use("/course", require("./routers/course"));

// function start
(async function start() {
  const PORT = process.env.PORT || 5000;

  try {
    mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.log(err + "MongoDB is not worked");
      }
      console.log("Mongo DB is just connected");
    });

    app.listen(PORT, () => {
      console.log(`Server is working on port ${PORT}`);
    });
  } catch (e) {
    throw e;
  }
})();

// uMjnoAIiphDSlL4d
