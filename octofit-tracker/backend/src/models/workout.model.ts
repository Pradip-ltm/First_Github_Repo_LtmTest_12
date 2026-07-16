import mongoose, { Schema, Document } from 'mongoose';

export interface Workout extends Document {
  name: string;
  category: string;
  durationMinutes: number;
  intensity: string;
}

const workoutSchema = new Schema<Workout>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  intensity: { type: String, required: true },
});

const WorkoutModel = mongoose.model<Workout>('Workout', workoutSchema);
export default WorkoutModel;
