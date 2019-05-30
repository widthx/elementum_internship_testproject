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
            query_results: []
        }
    }

    search_movies = (e) => {

        let input = "";
        if (e) input = e.target.value;

        let query = {
            query: input,
            results: [],
            api_key: api.key
        }
        query = queryString.stringify(query);

        axios.get(api.base + 'search/movie?' + query).then(res => {
            this.setState({ query_results: res.data.results })
            console.log(this.state.query_results)
        })        
    }

    componentDidMount() {
        this.search_movies()
    }

    generate_posters = () => {
        let posters = [];
        for (let a in this.state.query_results) {
            posters.push(<MoviePoster meta={this.state.query_results[a]} key={a}></MoviePoster>)
        }
        return (posters);
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <div className="left">
                        <div className="searchBar">
                            <FontAwesomeIcon icon='search'/>
                            <input onChange={e => this.search_movies(e)}></input>
                        </div>
                    </div>
                </div>
                <div className="movie_posters">
                    <div className="container">
                        {this.generate_posters()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index