import express from 'express';

import * as ProjectController from '../controllers/projects';

const router = express.Router();

router.get('/', ProjectController.onGetProjects);

router.get('/:id', ProjectController.onGetProject);

export default router;
