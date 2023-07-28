import { CommentModel } from '../models';
import type { Comment, SessionUser } from '../utils/Interfaces';

class CommentService {
  async createComment(comment: Comment, currentUser: SessionUser): Promise<void> {
    await CommentModel.query().insert(comment).context({currentUser});
  }

  async getComments(): Promise<Comment[]> {
    return CommentModel.query();
  }

  // Add other functions here as needed
}

export default CommentService;
