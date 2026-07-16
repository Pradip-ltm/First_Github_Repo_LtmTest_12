"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_model_1 = __importDefault(require("../models/leaderboard.model"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const leaderboard = await leaderboard_model_1.default.find().sort({ rank: 1 }).limit(50);
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch leaderboard', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const entry = await leaderboard_model_1.default.create(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create leaderboard entry', error });
    }
});
exports.default = router;
