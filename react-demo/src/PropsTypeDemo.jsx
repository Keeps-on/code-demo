import React from 'react';
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

PropsTypeDemo.propTypes = {
    title: PropTypes.number.isRequired
}

PropsTypeDemo.defaultProps = {
    title: 1
}