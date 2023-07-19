import { StatusModel } from '../models';
import type { SessionUser, Status } from '../utils/Interfaces';

class StatusService {
  async createStatus(status: Status, currentUser: SessionUser): Promise<void> {
    await StatusModel.query().insert(status).context({currentUser});
  }

  async getStatuses(): Promise<Status[]> {
    return StatusModel.query();
  }

  // Add other functions here as needed
}

export default StatusService;
