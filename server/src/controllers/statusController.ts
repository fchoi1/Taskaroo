import type { Request, Response } from 'express';
import StatuService from '../service/StatusService';

const statuService = new StatuService();

const getAllStatuses = async (req: Request, res: Response) => {
  try {
    const statuses = await statuService.getStatuses();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve status: ' + error.message });
  }
};

// Implement other controller functions for statu operations

export default {
  getAllStatuses
  // Export other functions for status operations
};
