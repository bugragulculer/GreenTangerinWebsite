import React from 'react';
import PropTypes from 'prop-types'

const Badge = ({ count, children }) => {
    return (
        <div className='badge'>
            {children}
            {count >= 1 && <span className='badge__count'>{count}</span>}
        </div>
    )
};

Badge.propTypes = {
    count: PropTypes.number.isRequired
}

export default Badge;