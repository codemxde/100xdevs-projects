import { Schema, model, Types } from "mongoose";

type types = "link" | "image" | "video";

const ContentSchema = new Schema({
  url: { type: String, unique: true },
  title: { type: String, require: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  userId: { type: Types.ObjectId, ref: "Users", require: true },
});

const Content = model("content", ContentSchema);

export default Content;
