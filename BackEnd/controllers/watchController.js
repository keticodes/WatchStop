const Watches = require("../models/watchModel");
const mongoose = require("mongoose");
const { initializeGFS } = require("../server")

let gfs;

initializeGFS()
  .then((initializedGFS) => {
    gfs = initializedGFS;

const createWatch = async (req, res) => {
  const { name, description, price, city } = req.body;
  try {
    if (!name || !price || !description || !city) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }
    const writeStream = gfs.createWriteStream({
      filename: req.file.originalname, // Use the original filename as the image name
    });
      // Create a new watch with the image ID from the GridFS file
      const watch = new Watches({
        name,
        description,
        imageId: file._id,
        price,
        city,
      });
      watch.save((err, watch) => {
        if (err) {
          return res.status(500).json({ error: "Unable to create the watch" });
        }
        res.status(201).json(watch);
      });
    });
    writeStream.write(req.file.buffer);
    writeStream.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create the watch" });
  }
};
const updateWatch = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, price, city } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid watch ID" });
    }
    const watch = await Watches.findById(id);
    if (!watch) {
      return res.status(404).json({ error: "Watch not found" });
    }
    watch.name = name;
    watch.description = description;
    watch.imageUrl = imageUrl;
    watch.price = price;
    watch.city = city;
    await watch.save();
    res.status(200).json(watch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update the watch" });
  }
};
const getWatch = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid watch ID" });
    }
    const watch = await Watches.findById(id);

    if (!watch) {
      return res.status(404).json({ error: "Watch not found" });
    }
    res.status(200).json(watch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve the watch" });
  }
};
const getWatches = async (req, res) => {
  try {
    const watches = await Watches.find({});
    res.status(200).json(watches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to retrieve watches" });
  }
};
const deleteWatch = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid watch ID" });
    }
    const watch = await Watches.findByIdAndDelete(id);

    if (!watch) {
      return res.status(404).json({ error: "Watch not found" });
    }
    res.status(200).json(watch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to delete the watch" });
  }
};
module.exports = {
  createWatch,
  updateWatch,
  getWatch,
  getWatches,
  deleteWatch,
};
})

