import mongoose, { Schema, models, model } from "mongoose"

interface Question {
  _id?: mongoose.Types.ObjectId;
  title: string;
  questionId: number;
  tags: string[];
  content: string;
  difficulty: "easy" | "medium" | "hard";
  createdAt?: Date;
  updatedAt?: Date;
}

const questionSchema = new Schema<Question>({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [200, "Title cannot exceed more than 200 characters"]
  },
  questionId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty level is required"],
  }
}, {
  timestamps: true
})

const QuestionModel = models.Question || model<Question>("Question", questionSchema);

export default QuestionModel;
