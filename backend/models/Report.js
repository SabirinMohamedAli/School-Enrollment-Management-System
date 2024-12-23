const mongoose = require("mongoose");

const reportSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Enrollment", "Demographics", "Payments"],
      required: true,
    },
    data: { type: Object, required: true }, // Store dynamic report data
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    generatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
