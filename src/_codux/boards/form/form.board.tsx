import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Form from '../../../../components/Form.jsx';

export default createBoard({
    name: 'Form',
    Board: () => <Form />
});
