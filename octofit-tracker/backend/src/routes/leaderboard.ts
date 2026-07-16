import { Router } from 'express';
import LeaderboardModel from '../models/leaderboard.model';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardModel.find().sort({ rank: 1 }).limit(50);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const entry = await LeaderboardModel.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create leaderboard entry', error });
  }
});

export default router;
