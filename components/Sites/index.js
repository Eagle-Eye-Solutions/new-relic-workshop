import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sites extends Component {

    render() {

       // const { title, subtitle } = this.props;

        return  <>
            <div>
                <h1>{title}</h1>
                <div className="subtitle">{subtitle}</div>
            </div>
        </>
        
    }
}
