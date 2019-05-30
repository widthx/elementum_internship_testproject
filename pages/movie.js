import "isomorphic-fetch"

import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/globals.scss';
import '../styles/movie_page.scss';

import { api } from '../config/api.js';

import MoviePoster from '../components/MoviePoster'
import Nav from '../components/Nav'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            movie_meta: {}
        }
    }

    componentDidMount() {
        let query = {
            movie_id: window.location.href.split('/')[4],
            api_key: api.key
        }
        query = queryString.stringify(query);

        axios.get(api.base + 'movie?' + query).then(res => {
            console.log(res)
            this.setState({ movie_meta: res.data.results })
            console.log(this.state.movie_meta)
        }).catch(err => {
            this.setState({ error: true })

            console.log(this.state.error);
        })
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <h3>{this.state.error}</h3>
                { this.state.error &&
                    <div>
                        <h3 className="error">Error:</h3>
                        <h5>This movie doesnt exist!</h5>
                    </div>
                }
                <h2>{this.state.movie_meta.title}</h2>
            </div>
        )
    }
}

export default Index