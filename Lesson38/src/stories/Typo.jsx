import React from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Typo = ({
    primary = false,
    bold = false,
    size = 'medium',
    label,
    ...props
}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div
            className={['storybook-typo', `storybook-typo--${size}`, mode].join(' ')}
            style={{size: size}}
            {...props}
        >
            <span style={{ fontWeight: bold ? 'bold' : 'normal' }}>{label}</span>
        </div>
    );
};

Typo.propTypes = {
    label: PropTypes.string,

    size: PropTypes.string,

    bold: PropTypes.bool
};
