const multer = require("multer");

let cont = 1
const fileUpload = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, cont++ + "-" + file.originalname)
    }
});
const imageUpload = multer({ storage: fileUpload }).single("image");

module.exports = imageUpload