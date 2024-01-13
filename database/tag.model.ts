import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question", // Replace with the actual model name for questions if needed
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // Replace with the actual model name for users if needed
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
