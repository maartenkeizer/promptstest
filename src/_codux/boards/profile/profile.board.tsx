import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Profile from '../../../../components/Profile.jsx';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />
});
