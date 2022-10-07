import Well from "../models/Wellmodel.js";
import Wells from "../models/Wellmodel copy.js";

export const getWells = async (req, res) => {
  try {
    const wells = await Well.find();
    res.json(wells.well);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWellById = async (req, res) => {
  try {
    const well = await Well.findById(req.params.id);
    res.json(well);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveWell = async (req, res) => {
  const well = new Wells(req.body);
  try {
    const insertedwell = await well.save();
    res.status(201).json(insertedwell);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateWell = async (req, res) => {
  try {
    const updatedwell = await Well.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedwell);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteWell = async (req, res) => {
  try {
    const deletedwell = await Well.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedwell);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDepths = async (req, res) => {
  try {
    const wells = await Well.find();
    res.json(wells.depths);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getDepthById = async (req, res) => {
  try {
    const well = await Well.findById(req.params.depths.id);
    res.json(well);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveDepth = async (req, res) => {
  const well = new Well(req.body);
  try {
    const inserteddepth = await well.depths.save();
    res.status(201).json(inserteddepth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDepth = async (req, res) => {
  try {
    const deletedDepth = await Well.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedwell);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
