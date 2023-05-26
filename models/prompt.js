import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    // The creator needs to be a document in the database, more specifically the user type
    type: Schema.Types.ObjectId,
    // For one to many relationship, as one user can create many prompts
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;