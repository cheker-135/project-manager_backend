import express from 'express';
import {
  createProject,
  getProjectData,
  getTask,
  getAllProjects,
  getAllTasks,
} from '../controllers/projectController.js';
import { protect, permissionsOne } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, createProject);
router.get('/:projectId', protect, permissionsOne, getProjectData);
router.get('/',protect,   getAllProjects);
router.get('/getTask/:projectId/:taskId',protect,  permissionsOne, getTask);
router.get('/tasks',protect,getAllTasks);

export default router;
