const Bug = require('../models/Bug');

exports.submitBug = async (req, res) => {
  const { title, priority, description } = req.body;
  try {
    const bug = new Bug({ title, priority, description });
    await bug.save();
    res.status(201).json(bug);
  } catch {
    res.status(500).send();
  }
};

exports.getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch {
    res.status(500).send();
  }
};
