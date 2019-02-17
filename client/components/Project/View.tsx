import React from 'react';

import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Block from '../Block/View';

interface IProps {
    title: string;
    description: string;
}

const Project: React.SFC<IProps> = ({ title, description }) => (
    <>
        <Row>
            <Col>
                <Block>
                    <h1>{title}</h1>
                </Block>
            </Col>
        </Row>
        <Row>
            <Col>
                <Block>
                    <p>{description}</p>
                </Block>
            </Col>
        </Row>
    </>
);

export default Project;