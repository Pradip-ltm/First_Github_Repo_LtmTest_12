import mongoose, { Schema, Document } from 'mongoose';

export interface LeaderboardEntry extends Document {
  rank: number;
  teamName: string;
  points: number;
  workoutsCompleted: number;
}

const leaderboardSchema = new Schema<LeaderboardEntry>({
  rank: { type: Number, required: true },
  teamName: { type: String, required: true },
  points: { type: Number, required: true },
  workoutsCompleted: { type: Number, required: true },
});

const LeaderboardModel = mongoose.model<LeaderboardEntry>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;
