import { ProjectModel } from '../models';
import type { Project, SessionUser } from '../utils/Interfaces';

class ProjectService {
  async createProject(project: Project, currentUser: SessionUser): Promise<void> {
    await ProjectModel.query().insert(project).context({currentUser});
  }

  async getProjects(): Promise<Project[]> {
    return ProjectModel.query();
  }

  // Add other functions here as needed
}

export default ProjectService;
