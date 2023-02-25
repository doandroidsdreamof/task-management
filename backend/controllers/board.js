const asyncHandler = require('express-async-handler');
const Board = require('../models/boardModel');

const createBoard = asyncHandler(async (req, res) => {
  const { user } = req;
  const { boardName } = req.body;
  if (!boardName) {
    res.status(401).json({ success: false, msg: 'Board name is missing' });
  } else {
    const board = await Board.create({
      user,
      boardName,
    });
    res.status(200).json({ success: true, msg: 'Board is inserted' });
  }
});

module.exports = {
  createBoard,
};
