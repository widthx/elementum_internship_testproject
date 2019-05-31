import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'

import '../styles/nav.scss'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    search_redirect() {
        Router.push('/search');
    }

    render() {
        return (
            <div>
                {
                    <div className="nav">
                        <div className="left">
                            <FontAwesomeIcon icon='video' className="video_icon"/>
                            <a href="/discover">Discover</a>
                        </div>
                        <div className="right">
                            <div className="searchBar">
                                <FontAwesomeIcon icon='search'/>
                                <input onClick={() => Router.push('/search')}></input>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Nav