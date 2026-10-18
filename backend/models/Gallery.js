const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Bridal", "Chiffon", "Modern", "Textile", "Traditional"],
    },

    price: {
      type: String,
      default: "Contact for price",
    },

    description: {
      type: String,
      default: "Luxury fashion piece crafted by Tesfa.",
    },

    imageUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Gallery", GallerySchema);
