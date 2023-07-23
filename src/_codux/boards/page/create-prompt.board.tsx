import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CreatePrompt from '../../../../app/create-prompt/page.jsx';

export default createBoard({
    name: 'CreatePrompt',
    Board: () => <CreatePrompt />
});
