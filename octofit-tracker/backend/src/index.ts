import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Activity from './models/activity.model';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Octofit API is running' });
});

app.get('/', (_req, res) => {
  res.send('Octofit backend is ready');
});

app.get('/api/activities', async (_req, res) => {
  try {
    const activities = await Activity.find().sort({ date: -1 }).limit(20);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load activities', error });
  }
});

app.post('/api/activities', async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ message: 'Could not create activity', error });
  }
});

mongoose
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
