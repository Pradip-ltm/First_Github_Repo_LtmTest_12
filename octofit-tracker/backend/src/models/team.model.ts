import mongoose, { Schema, Document } from 'mongoose';

export interface Team extends Document {
  name: string;
  description: string;
  members: string[];
}

const teamSchema = new Schema<Team>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: { type: [String], required: true },
});

const TeamModel = mongoose.model<Team>('Team', teamSchema);
export default TeamModel;
