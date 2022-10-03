const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;