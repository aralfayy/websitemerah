import mongoose from "mongoose";

const Wells = mongoose.Schema({
  well: { type: String, required: true },
  depths: [
    {
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
      vp: {
        type: Number,
        required: true,
      },
      vs: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Wells", Wells);
