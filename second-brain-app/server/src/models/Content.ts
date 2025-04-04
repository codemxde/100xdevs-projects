import { Schema, model, Types } from "mongoose";

type BrainType = "document" | "tweet" | "youtube" | "link";

const ContentSchema = new Schema({
  url: { type: String, require: true },
  title: { type: String, require: true },
  tags: [{ type: Types.ObjectId, ref: "tags" }],
  userId: { type: Types.ObjectId, ref: "users", require: true },
});

const Content = model("content", ContentSchema);

export default Content;
