"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_model_1 = __importDefault(require("../models/workout.model"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const workouts = await workout_model_1.default.find().limit(50);
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch workouts', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const workout = await workout_model_1.default.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create workout', error });
    }
});
exports.default = router;
