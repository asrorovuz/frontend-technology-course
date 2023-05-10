const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    file.mimetype === "video/mp4" ? cb(null, "videos") : cb(null, "images");
  },
  filename(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const allowedTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "video/mp4",
  "video/MOV",
  "video/WMV",
];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
});
