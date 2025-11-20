import City from "../models/City.js";

export const createCity = async (req, res) => {
  const city = await City.create(req.body);
  res.status(201).json(city);
};

export const getCities = async (req, res) => {
  const cities = await City.find();
  res.json(cities);
};

export const getCity = async (req, res) => {
  const city = await City.findById(req.params.id);
  if (!city) return res.status(404).json({ message: "City not found" });
  res.json(city);
};

export const updateCity = async (req, res) => {
  const city = await City.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(city);
};

export const deleteCity = async (req, res) => {
  await City.findByIdAndDelete(req.params.id);
  res.json({ message: "City deleted" });
};
