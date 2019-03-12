import React from 'react';

import Row from '../Grid/Row';
import Col from '../Grid/Col';
import Block from '../Block/View';
import Page from './View';

const HomePage: React.SFC<{}> = () => (
    <Page>
        <Row>
            <Col>
                <Block>
                    <h1>Hello World</h1>
                </Block>
            </Col>
        </Row>
        <Row>
            <Col size={6}>
                <Block>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est fugit aliquid minus consectetur maxime laudantium tempora rerum repellat in distinctio.
                    </p>
                </Block>
            </Col>
            <Col size={6}>
                <Block>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est fugit aliquid minus consectetur maxime laudantium tempora rerum repellat in distinctio.
                    </p>
                </Block>
            </Col>
        </Row>
        
    </Page>
);

export default HomePage;
