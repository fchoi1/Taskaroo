import knex from '../db';
import type { Comment } from '../utils/Interfaces';

const commentService = {
  createComment: async (comment: Comment): Promise<void> => {
    await knex('comments').insert(comment);
  },

  getComments: async (): Promise<Comment[]> => {
    return knex('comments').select('*');
  }

  // Add other functions here as needed
};

export default commentService;

