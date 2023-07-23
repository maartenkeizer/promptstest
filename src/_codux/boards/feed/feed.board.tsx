import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Feed from '../../../../components/Feed.jsx';

export default createBoard({
    name: 'Feed',
    Board: () => <Feed />
});
