import { Router } from 'express';
import WorkoutModel from '../models/workout.model';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const workouts = await WorkoutModel.find().limit(50);
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const workout = await WorkoutModel.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create workout', error });
  }
});

export default router;
