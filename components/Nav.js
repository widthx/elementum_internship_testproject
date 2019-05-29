import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/nav.scss'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav">
                <div className="searchBar">
                    <FontAwesomeIcon icon='search'/>
                    <input></input>
                </div>
            </div>
        )
    }
}

export default Nav