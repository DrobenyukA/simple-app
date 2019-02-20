import fs from 'fs';
import path from 'path';
import { IProject } from '../types/Projects';

const pathToData = path.resolve(__dirname, '../../data/projects.json');

export const getAllProjects = () => {
    const data = fs.readFileSync(pathToData, 'utf8');
    return JSON.parse(data) as IProject;
};

export const getAllProjectById = (id: string) => {
    const data = fs.readFileSync(pathToData, 'utf8');
    return JSON.parse(data).filter((item: IProject) => item.id === id)[0] as IProject[];
};
