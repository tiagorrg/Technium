import { fn } from '@storybook/test';

import { Typo } from './Typo';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Typo',
    component: Typo,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],

    args: { onClick: fn() },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Заголовок',
        size: '100px',
        bold: true
    },
};