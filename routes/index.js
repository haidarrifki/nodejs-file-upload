const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: 'public/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

const handlerUploader = require('../handlers/uploader');

// Routing yang mengarah ke http://localhost:1337/
router.get('/', async (req, res) => {
  return res.json({ message: 'Hello World!' });
});
// Routing yang mengarah ke http://localhost:1337/uploader
router.post('/uploader', upload.single('image'), handlerUploader.single);

module.exports = router;