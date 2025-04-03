import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String, require: true },
});

const Users = model("users", UserSchema);

export default Users;
