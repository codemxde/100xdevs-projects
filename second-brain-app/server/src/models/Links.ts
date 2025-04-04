import { Schema, model, Types } from "mongoose";

const LinkSchema = new Schema({
  hash: { type: String, require: true },
  userId: { type: Types.ObjectId, ref: "users", require: true, unique: true },
});

const Links = model("links", LinkSchema);

export default Links;
