import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Provider from '../../../../components/Provider.jsx';

export default createBoard({
    name: 'Provider',
    Board: () => <Provider />
});
