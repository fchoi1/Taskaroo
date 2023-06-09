import type { Request, Response } from 'express';
import ProjectService from '../service/ProjectService';

const projectService = new ProjectService();

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects:  ' + error.message });
  }
};

// Implement other controller functions for project operations

export default {
  getAllProjects
  // Export other functions for project operations
};
