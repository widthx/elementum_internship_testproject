import "isomorphic-fetch"

import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/globals.scss';
import '../styles/search.scss';

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

        let path, query;
        let input = false;
        if (e) input = e.target.value;

        if (input) {
            path = 'search/movie?';
            query = {
                query: input,
                results: [],
                api_key: api.key
            }       
        } else { //default if no value typed
            path = 'discover/movie?';
            query = {
                sort_by: "popularity.desc",
                api_key: api.key
            }
        }

        query = queryString.stringify(query);

        axios.get(api.base + path + query).then(res => {
            this.setState({ query_results: res.data.results })
            console.log(this.state.query_results)
            query = { api_key: api.key }
            query = queryString.stringify(query);

            axios.get(api.base + 'genre/movie/list?' + query).then(res => {
                console.log(res)
                this.setState({
                    genres: res.data.genres
                })
            })

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

    generate_genres = () => {
        let genres = [];

        for (let a in this.state.genres) {
            genres.push(<div>
                <input type="checkbox" value={this.state.genres[a].name}></input>
                <span>{this.state.genres[a].name}</span>
            </div>)
        }
        return (genres);
    }

    render() {
        return (
            <div className="search">
                <div className="nav">
                    <div className="left">
                        {/* <FontAwesomeIcon icon='video' className="video_icon"/> */}
                        <div className="searchBar">
                            <FontAwesomeIcon icon='search'/>
                            <input onChange={e => this.search_movies(e)}></input>
                        </div>
                    </div>
                </div>
                <div className="sort_movies">
                    <div className="sort_box">
                        <div className="header"><h3>genre</h3></div>
                            {this.generate_genres()}
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