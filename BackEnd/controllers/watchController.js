const Watches = require("../models/watchModel");
const mongoose = require("mongoose");

const createWatch = async (req, res) => {
  const { name, manufacturer, description } = req.body;
  const id = Date.now();
  const watch = await Watches.create({ name, manufacturer, description, id });
  res.status(201).json(watch);
};
const updateWatch = async (req, res) => {
  const { id } = req.params;
  const { manufacturer, name, description } = req.body;
  const watch = await Watches.findById(id);
  watch.name = name;
  watch.manufacturer = manufacturer;
  watch.description = description;
  await watch.save();
  res.status(201).json(watch);
};

const getWatch = async (req, res) => {
  const { id } = req.params;
  const watch = await Watches.findById(id);
  res.status(200).json(watch);
};

const getWatches = async (req, res) => {
  const watches = await Watches.find({});
  res.status(200).json(watches);
};
const deleteWatch = async (req, res) => {
  const { id } = req.params;
  const watch = await Watches.findByIdAndDelete(id);
  res.status(201).json(watch);
};

module.exports = {
  createWatch,
  updateWatch,
  getWatch,
  getWatches,
  deleteWatch,
};
