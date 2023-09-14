const express = require("express");
const {
  getWatches,
  getWatch,
  deleteWatch,
  updateWatch,
  createWatch,
} = require("../controllers/watchController");

const router = express.Router();

router.get("/watches", getWatches);
router.get("/watches:id", getWatch);
router.post("/watches", createWatch);
router.delete("/watches:id", deleteWatch);
router.put("/watches:id", updateWatch);

module.exports = router;
