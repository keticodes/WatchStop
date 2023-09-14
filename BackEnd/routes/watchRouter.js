const express = require("express");
const {
  getWatches,
  getWatch,
  deleteWatch,
  updateWatch,
  createWatch,
} = require("../controllers/watchController");

const router = express.Router();

router.get("/", getWatches);
router.get("/:id", getWatch);
router.post("/", createWatch);
router.delete("/:id", deleteWatch);
router.put("/:id", updateWatch);

module.exports = router;
