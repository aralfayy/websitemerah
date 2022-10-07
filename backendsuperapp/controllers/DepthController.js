import Depth from "../models/WellModel copy.js";

export const getDepths = async (req, res) => {
  try {
    const depths = await Depth.find();
    res.json(depths.depths);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDepthByDepth = async (req, res) => {
  try {
    const depth = await Depth.findByNumber(
      req.params.depths && req.params.depths.depth
    );
    res.json(depth);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveDepth = async (req, res) => {
  const depth = new Depth(req.body);
  try {
    const inserteddepth = await depth.save();
    res.status(201).json(inserteddepth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateDepth = async (req, res) => {
  try {
    const updateddepth = await Depth.updateOne(
      { depth: req.params.depths && req.params.depths.depth },
      { $set: req.body }
    );
    res.status(200).json(updateddepth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDepth = async (req, res) => {
  try {
    const deleteddepth = await Depth.deleteOne({
      depth: req.params.depths && req.params.depths.depth,
    });
    res.status(200).json(deleteddepth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
