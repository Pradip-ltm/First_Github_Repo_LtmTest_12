"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../models/user.model"));
const team_model_1 = __importDefault(require("../models/team.model"));
const activity_model_1 = __importDefault(require("../models/activity.model"));
const leaderboard_model_1 = __importDefault(require("../models/leaderboard.model"));
const workout_model_1 = __importDefault(require("../models/workout.model"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            user_model_1.default.deleteMany({}),
            team_model_1.default.deleteMany({}),
            activity_model_1.default.deleteMany({}),
            leaderboard_model_1.default.deleteMany({}),
            workout_model_1.default.deleteMany({}),
        ]);
        const teams = await team_model_1.default.create([
            {
                name: 'Team Octofit',
                description: 'Daily fitness builders competing for the top spot.',
                members: ['user-1', 'user-2'],
            },
            {
                name: 'Morning Movers',
                description: 'Early risers who love running and strength sessions.',
                members: ['user-3'],
            },
        ]);
        const users = await user_model_1.default.create([
            {
                name: 'Amina Patel',
                email: 'amina@octofit.com',
                avatarUrl: 'https://i.pravatar.cc/150?img=47',
                joinedAt: new Date('2026-05-13T08:30:00Z'),
                teamId: teams[0]._id.toString(),
            },
            {
                name: 'Javier Santos',
                email: 'javier@octofit.com',
                avatarUrl: 'https://i.pravatar.cc/150?img=49',
                joinedAt: new Date('2026-06-02T10:15:00Z'),
                teamId: teams[0]._id.toString(),
            },
            {
                name: 'Mia Chen',
                email: 'mia@octofit.com',
                avatarUrl: 'https://i.pravatar.cc/150?img=22',
                joinedAt: new Date('2026-05-28T07:45:00Z'),
                teamId: teams[1]._id.toString(),
            },
        ]);
        await workout_model_1.default.create([
            {
                name: 'Sunrise Run',
                category: 'Cardio',
                durationMinutes: 30,
                intensity: 'Moderate',
            },
            {
                name: 'Full Body Strength',
                category: 'Strength',
                durationMinutes: 45,
                intensity: 'High',
            },
            {
                name: 'Yoga Flow',
                category: 'Flexibility',
                durationMinutes: 25,
                intensity: 'Low',
            },
        ]);
        await activity_model_1.default.create([
            {
                userId: users[0]._id.toString(),
                type: 'Running',
                durationMinutes: 28,
                caloriesBurned: 310,
                date: new Date('2026-07-12T06:30:00Z'),
            },
            {
                userId: users[1]._id.toString(),
                type: 'Strength Training',
                durationMinutes: 42,
                caloriesBurned: 420,
                date: new Date('2026-07-11T17:15:00Z'),
            },
            {
                userId: users[2]._id.toString(),
                type: 'Yoga',
                durationMinutes: 24,
                caloriesBurned: 145,
                date: new Date('2026-07-12T07:30:00Z'),
            },
        ]);
        await leaderboard_model_1.default.create([
            {
                rank: 1,
                teamName: 'Team Octofit',
                points: 1240,
                workoutsCompleted: 38,
            },
            {
                rank: 2,
                teamName: 'Morning Movers',
                points: 978,
                workoutsCompleted: 27,
            },
        ]);
        console.log('Inserted sample teams, users, workouts, activities, and leaderboard entries.');
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
