const { Schema, model } = require("mongoose");
const BookSchema = Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  editorial: { type: String, required: true },
  ISBN: { type: String, required: true },
});

BookSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();

  return object;
});
module.exports = model("Book", BookSchema);
