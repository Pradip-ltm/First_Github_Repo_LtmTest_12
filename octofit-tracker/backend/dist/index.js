"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const activity_model_1 = __importDefault(require("./models/activity.model"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Octofit API is running' });
});
app.get('/', (_req, res) => {
    res.send('Octofit backend is ready');
});
app.get('/api/activities', async (_req, res) => {
    try {
        const activities = await activity_model_1.default.find().sort({ date: -1 }).limit(20);
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to load activities', error });
    }
});
app.post('/api/activities', async (req, res) => {
    try {
        const activity = await activity_model_1.default.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Could not create activity', error });
    }
});
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
});
