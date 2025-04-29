const State = require('../models/State');

const getAllStates = async (req, res) => {
    const states = await State.find();
    res.json(states);
};

const getState = async (req, res) => {
    const { stateCode } = req.params;
    const state = await State.findOne({ stateCode: stateCode.toUpperCase() });
    if (!state) return res.status(404).json({ message: 'State not found' });
    res.json(state);
};

const createState = async (req, res) => {
    try {
        const newState = await State.create(req.body);
        res.status(201).json(newState);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateState = async (req, res) => {
    const { stateCode } = req.params;
    const updated = await State.findOneAndUpdate(
        { stateCode: stateCode.toUpperCase() },
        req.body,
        { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'State not found' });
    res.json(updated);
};

const deleteState = async (req, res) => {
    const { stateCode } = req.params;
    const deleted = await State.findOneAndDelete({ stateCode: stateCode.toUpperCase() });
    if (!deleted) return res.status(404).json({ message: 'State not found' });
    res.json({ message: `${stateCode.toUpperCase()} deleted` });
};

module.exports = {
    getAllStates,
    getState,
    createState,
    updateState,
    deleteState
};