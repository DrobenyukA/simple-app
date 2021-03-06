import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Page from './View';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Block from '../Block/View';
import Loading from '../Loading/View';
import { Project } from '../Project/types';

const ProjectPage: React.SFC<RouteComponentProps<{ id: string }>> = ({ match }) => {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        fetch(`/api/projects/${match.params.id}`)
            .then((resp) => resp.json())
            .then((result) => setProject(result as Project))
            // TODO: handle error in correct way
            .catch((e) => console.error(e));
    }, []);

    if (project) {
        return (
            <Page>
                <Row>
                    <Col>
                        <Block>
                            <h1>{project.title}</h1>
                        </Block>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Block>
                            <p>
                                {project.description}
                            </p>
                        </Block>
                    </Col>
                </Row> 
            </Page>
        );
    }
    return (
        <Page>
            <Loading />
        </Page>
    );
};

export default ProjectPage;
