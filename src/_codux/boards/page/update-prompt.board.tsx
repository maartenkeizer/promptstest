import React from 'react';
import { createBoard } from '@wixc3/react-board';
import UpdatePrompt from '../../../../app/update-prompt/page.jsx';

export default createBoard({
    name: 'UpdatePrompt',
    Board: () => <UpdatePrompt />
});
