import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Nav from '../../../../components/Nav.jsx';

export default createBoard({
    name: 'Nav',
    Board: () => <Nav />
});
