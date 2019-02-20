import { Response, Request } from 'express';
import { getAllProjectById, getAllProjects } from '../services/project';

export function onGetProjects(req: Request, res: Response) {
    return res.json(getAllProjects());
}

export function onGetProject(req: Request, res: Response) {
    return res.json(getAllProjectById(req.params.id));
}
