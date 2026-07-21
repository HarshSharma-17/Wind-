import { getProjects } from "./projectService";
import { getHistory } from "./generateService";

export const getDashboardData = async () => {
    const [projectsRes, historyRes] = await Promise.all([
        getProjects(),
        getHistory(),
    ]);

    const projects = projectsRes.projects || [];
    const history = historyRes.history || [];

    return {
        totalProjects: projects.length,
        totalGenerations: history.length,
        latestProject: projects[0] || null,
        latestGeneration: history[0] || null,
    };
};