import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: { type: Schema.Types.ObjectId, ref: "User" }, // jo subscribe kar raha hai
    channel: { type: Schema.Types.ObjectId, ref: "User" }, // jisko subscribe kiya ja raha hai
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
