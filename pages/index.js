import "isomorphic-fetch"

import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'

import '../styles/globals.scss';

import { api } from '../config/api.js';

import MoviePoster from '../components/MoviePoster'
import Nav from '../components/Nav'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popular_movies: []
        }
    }

    componentDidMount() {
        let query = {
            sort_by: "popularity.desc",
            api_key: api.key
        }
        query = queryString.stringify(query);

        axios.get(api.base + 'discover/movie?' + query).then(res => {
            this.setState({ popular_movies: res.data.results })
            console.log(this.state.popular_movies)
        })
    }

    generate_posters = () => {
        let posters = [];
        for (let a in this.state.popular_movies) {
            posters.push(<MoviePoster meta={this.state.popular_movies[a]} key={a}></MoviePoster>)
        }
        return (posters);
    }

    render() {
        return (
            <div>
                <Nav></Nav>

                <div className="movie_posters">
                    <div className="container">
                        <h3 className="title">Popular Movies</h3>
                        {this.generate_posters()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index