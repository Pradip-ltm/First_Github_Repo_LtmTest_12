"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_model_1 = __importDefault(require("../models/team.model"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const teams = await team_model_1.default.find().limit(50);
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch teams', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const team = await team_model_1.default.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create team', error });
    }
});
exports.default = router;
