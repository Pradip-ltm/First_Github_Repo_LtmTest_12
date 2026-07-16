"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_model_1 = __importDefault(require("../models/activity.model"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const activities = await activity_model_1.default.find().sort({ date: -1 }).limit(20);
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch activities', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const activity = await activity_model_1.default.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ message: 'Failed to create activity', error });
    }
});
exports.default = router;
