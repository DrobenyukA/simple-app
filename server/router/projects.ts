import express, { Request, Response } from 'express';
const router = express.Router();

const projectsDBMock = [{
    id: '1',
    title: 'Some project',
    description: 'Lorem ipsum dolor sit amet.'
},
{
    id: '2',
    title: 'Some project-2',
    description: 'Lorem ipsum dolor sit amet.'
},
{
    id: '3',
    title: 'Some project-3',
    description: 'Lorem ipsum dolor sit amet.'
},
{
    id: '4',
    title: 'Some project-4',
    description: 'Lorem ipsum dolor sit amet.'
},
{
    id: '5',
    title: 'Some project-5',
    description: 'Lorem ipsum dolor sit amet.'
},
{
    id: '6',
    title: 'Some project-6',
    description: 'Lorem ipsum dolor sit amet.'
}]

// TODO: use correct controller to handle response

router.get("/", (req: Request, res: Response) => {
    return res.json(projectsDBMock);
});

router.get("/:id", (req: Request, res: Response) => {
    return res.json(projectsDBMock.filter(project => project.id === req.params.id)[0]); 
});

export default router;