import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRole } from '@/fundamental/models/userRole';

// 1. Define your interface
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatar: string;
  bio: string;
  roles: UserRole[];
  comments: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
// 2. Create a Schema corresponding to the interface
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  avatar: { type: String },
  bio: { type: String },
  roles: { type: [String], enum: Object.values(UserRole), required: true, default: [UserRole.User] },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true }); // With this option, Mongoose automatically adds createdAt and updatedAt fields

// pre middleware for hashing the password before save
userSchema.pre("save", async function (next) {
  const user = this as IUser;

  // If the password hasn't changed, don't hash it
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});
// 3. Create a Model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;