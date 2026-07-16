import { Router } from 'express';
import TeamModel from '../models/team.model';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const teams = await TeamModel.find().limit(50);
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch teams', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const team = await TeamModel.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create team', error });
  }
});

export default router;
