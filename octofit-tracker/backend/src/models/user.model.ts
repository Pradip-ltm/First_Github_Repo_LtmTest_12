import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  avatarUrl: string;
  joinedAt: Date;
  teamId: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatarUrl: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
  teamId: { type: String, required: true },
});

const UserModel = mongoose.model<User>('User', userSchema);
export default UserModel;
