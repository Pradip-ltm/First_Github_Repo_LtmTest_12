import mongoose, { Schema, Document } from 'mongoose';

export interface Activity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  date: Date;
}

const activitySchema = new Schema<Activity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

const ActivityModel = mongoose.model<Activity>('Activity', activitySchema);
export default ActivityModel;
