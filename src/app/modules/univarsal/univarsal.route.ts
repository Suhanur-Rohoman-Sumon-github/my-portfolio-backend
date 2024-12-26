
import express from 'express';
import { ProjectsControllers } from './univarsal.controller';

const router = express.Router();



  router.post('/create-projects',ProjectsControllers.createProjects);
  router.get('/get-projects',ProjectsControllers.getAllProjectFromDb);
  router.get('/get-projects/:projectId',ProjectsControllers.getSingleProjects);

  router.post('/create-blogs',ProjectsControllers.createBlog);
  router.get('/get-blogs',ProjectsControllers.getALLBlogs);
  router.get('/get-blogs/:blogId',ProjectsControllers.getSingleBLogs);

  router.post('/create-experience',ProjectsControllers.createExperience);
  router.get('/get-experience',ProjectsControllers.getAllExperience);
  






export const universalRoute = router;