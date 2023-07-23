import React from 'react';
import { createBoard } from '@wixc3/react-board';
import MyProfile from '../../../../app/profile/page.jsx';

export default createBoard({
    name: 'MyProfile',
    Board: () => <MyProfile />
});
