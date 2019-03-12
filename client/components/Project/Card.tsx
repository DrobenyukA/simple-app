import React from 'react';

import Block from '../Block/View';
import Link from '../Link/View';
import { UIRoutes } from '../../constants/routes';

interface Props {
    id: string;
    title: string;
    onClick: (e: React.FormEvent<HTMLAnchorElement>) => void;
}

const Card: React.SFC<Props> = ({ id, title, onClick }) => (
    <Block>
        <Link to={`#${UIRoutes.PROJECT.replace(':id', id)}`} onClick={onClick}>
            {title}
        </Link>
    </Block>     
);

export default Card;
