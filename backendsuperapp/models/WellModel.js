import mongoose from "mongoose";

const Well = mongoose.Schema({
  depth: {
    type: Number,
    required: true,
  },
  gr: {
    type: Number,
    required: true,
  },
  nphi: {
    type: Number,
    required: true,
  },
  vs: {
    type: Number,
    required: true,
  },
  vp: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Wells", Well);
