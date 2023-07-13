import type { Request, Response } from 'express';
import CommentService from '../service/CommentService';

const commentService = new CommentService();

const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await commentService.getComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments:  ' + error.message });
  }
};

// Implement other controller functions for comment operations

export default {
  getAllComments
  // Export other functions for comment operations
};
