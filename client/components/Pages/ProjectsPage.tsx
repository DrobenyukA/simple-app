import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Page from './View';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Card from '../Project/Card';
import Loading from '../Loading/View';
import { Project } from '../Project/types';
import { getNavClickHandler } from '../../utils/navigation';

const prMock: Project[] = [
    {
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
    }
];

const ProjectsPage: React.SFC<RouteComponentProps<{ id: string }>> = ({ history }) => {
    const [projects, setProject] = useState<Project[] | null>(null);
    const clickHandler = getNavClickHandler(history);
    
    useEffect(() => {
        fetch(`/api/projects`)
            .then((resp) => resp.json())
            .then((result) => setProject(result as Project[]))
            // TODO: handle error in correct way
            .catch((e) => console.error(e));
    }, []);

    if (!projects) {
        return (
            <Page>
                <Loading />
            </Page>
        );
    }

    if (projects && projects.length) {
        return (
            <Page>
                <Row>
                    {projects.map((project: Project) => (
                        <Col key={project.id} size={6}>
                            <Card id={project.id} title={project.title} onClick={clickHandler}/>
                        </Col>
                    ))}
                </Row>
            </Page>
        );
    }

    return (
        <Page>
            <p>There are no projects.</p>
        </Page>
    );
    
};

export default ProjectsPage;