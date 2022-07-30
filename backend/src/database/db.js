const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://sugarcosmetics:masaiuint5@cluster0.nfskqzh.mongodb.net/smoothShark?retryWrites=true&w=majority",
);

module.exports = connection;
