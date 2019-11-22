import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {


    render() {

        return  <>
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.subtitle}</div>
            </div>
        </>
        
    }
}
