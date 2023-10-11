const express = require("express");
const multer = require("multer")
const {
  getWatches,
  getWatch,
  deleteWatch,
  updateWatch,
  createWatch,
} = require("../controllers/watchController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getWatches);
router.get("/:id", getWatch);
router.post("/", upload.single("image"),createWatch);
router.delete("/:id", deleteWatch);
router.put("/:id", updateWatch);

module.exports = router;
