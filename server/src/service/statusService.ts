import { StatusModel } from '../models';
import type { Status } from '../utils/Interfaces';

class StatusService {
  async createStatus(status: Status, currentUser: string): Promise<void> {
    await StatusModel.query().insert(status).context({ currentUser });
  }

  async getStatuses(): Promise<Status[]> {
    return StatusModel.query();
  }

  // Add other functions here as needed
}

export default StatusService;
