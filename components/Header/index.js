import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {


    render() {

        const { title, subtitle } = this.props;

        return  <>
            <div>
                <h1>{title}</h1>
                <div>{subtitle}</div>
            </div>
        </>
        
    }
}
