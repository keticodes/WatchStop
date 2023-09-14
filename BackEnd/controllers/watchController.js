const Watches = require("../models/watchModel");
const mongoose = require("mongoose");

const createWatch = async (req, res) => {
  const { name, manufacturer, description } = req.body;
  try {
    if (!name || !manufacturer || !description) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }
    const id = Date.now();
    const watch = await Watches.create({ name, manufacturer, description, id });
    res.status(201).json(watch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create the watch" });
  }
};
const updateWatch = async (req, res) => {
  const { id } = req.params;
  const { manufacturer, name, description } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid watch ID" });
    }
    const watch = await Watches.findById(id);
    if (!watch) {
      return res.status(404).json({ error: "Watch not found" });
    }
    watch.name = name;
    watch.manufacturer = manufacturer;
    watch.description = description;
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