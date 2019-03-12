import fs from 'fs';
import path from 'path';
import { Project } from '../types/Projects';

const pathToData = path.resolve(__dirname, '../../data/projects.json');

export const getAllProjects = () => {
    const data = fs.readFileSync(pathToData, 'utf8');
    return JSON.parse(data) as Project;
};

export const getAllProjectById = (id: string) => {
    const data = fs.readFileSync(pathToData, 'utf8');
    return JSON.parse(data).filter((item: Project) => item.id === id)[0] as Project[];
};
