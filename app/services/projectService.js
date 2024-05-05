// app/services/projectService.js
const Project = require('../models/project');

const projects = [];

const projectService = {
  createProject: (name, description) => {
    const id = projects.length + 1;
    const project = new Project(id, name, description);
    projects.push(project);
    return project;
  },

  getProjects: () => projects,

  getProjectById: (id) => projects.find((project) => project.id === id),
};

module.exports = projectService;