import React from 'react';
import { createBoard } from '@wixc3/react-board';
import UserProfile from '../../../../app/profile/[id]/page.jsx';

export default createBoard({
    name: 'UserProfile',
    Board: () => <UserProfile />
});
