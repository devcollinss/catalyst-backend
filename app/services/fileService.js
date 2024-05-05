// app/services/fileService.js
const File = require('../models/file');
const projectService = require('./projectService');

const fileService = {
  uploadFile: (projectId, name, content) => {
    const project = projectService.getProjectById(projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const id = project.files.length + 1;
    const file = new File(id, name, content);
    project.addFile(file);
    return file;
  },
};

module.exports = fileService;