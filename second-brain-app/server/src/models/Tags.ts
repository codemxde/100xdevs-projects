import { Schema, model } from "mongoose";

const TagSchema = new Schema({
  title: { type: String, unique: true, require: true },
});

const Tags = model("tags", TagSchema);

export default Tags;
