import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'

import '../styles/nav.scss'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    search() {
        Router.push('/search');
    }

    render() {
        return (
            <div className="nav">
                    <div className="left">
                        <FontAwesomeIcon icon='video'/>
                        <a href="/discover">Discover</a>
                        <a href="/movies">Movies</a>
                    </div>
                    <div className="right">
                        <div className="searchBar">
                            <FontAwesomeIcon icon='search'/>
                            <input onClick={() => Router.push('/search')}></input>
                        </div>
                        {/* <a>movies</a> */}
                    </div>
            </div>
        )
    }
}

export default Nav