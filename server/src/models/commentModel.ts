import { Knex } from 'knex';

interface CommentModel {
  id: string;
  taskId: string;
}

const CommentSchema = {
  id: 'primary',
  taskId: 'uuid'
};

const createComment = async (knex: Knex, comment: CommentModel): Promise<void> => {
  await knex('comments').insert(comment);
};

const getCommentsByTaskId = async (knex: Knex, taskId: string): Promise<CommentModel[]> => {
  return knex('comments').where('taskId', taskId).select('*');
};

export { CommentModel, CommentSchema, createComment, getCommentsByTaskId };
