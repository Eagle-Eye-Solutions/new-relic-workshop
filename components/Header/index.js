import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }

    render() {

        const { title, subtitle } = this.props;

        return  <>
            <div>
                <h1>{title}</h1>
                <div className="subtitle">{subtitle}</div>
            </div>
        </>
        
    }
}
