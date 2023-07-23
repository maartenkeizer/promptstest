import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PromptCard from '../../../../components/PromptCard.jsx';

export default createBoard({
    name: 'PromptCard',
    Board: () => <PromptCard />
});
