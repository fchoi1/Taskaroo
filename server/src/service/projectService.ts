import { ProjectModel } from '../models';
import type { Project } from '../utils/Interfaces';

class ProjectService {
  async createProject(project: Project): Promise<void> {
    await ProjectModel.query().insert(project);
  }

  async getProjects(): Promise<Project[]> {
    return ProjectModel.query();
  }

  // Add other functions here as needed
}

export default ProjectService;
