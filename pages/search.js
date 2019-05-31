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
            query_results: [], //movies
            genres: [],
            selected_genres: [],
            discover: []
        }
    }

    search_movies = (e) => {

        let path, query, discover;
        let input = false;
        if (e) input = e.target.value;

        if (input || this.state.selected_genres[0]) {
            path = 'search/movie?';
            query = {
                with_genres: this.state.selected_genres.join(','),
                api_key: api.key,
            }
            if (input) query['query'] = input;
        } else { //default if no value typed
            discover = true;
            path = 'discover/movie?';
            query = {
                sort_by: "popularity.desc",
                api_key: api.key
            }
        }

        query = queryString.stringify(query);

        axios.get(api.base + path + query).then(res => {
            this.setState({ query_results: res.data.results })

            if (discover) {
                this.setState({ discover: this.state.query_results })
            }

            if (!this.state.genres[0]) {
                query = { api_key: api.key }
                query = queryString.stringify(query);
    
                axios.get(api.base + 'genre/movie/list?' + query).then(res => {
                    this.setState({
                        genres: res.data.genres
                    })
                })
            }
        })        
    }

    sort_movies_by_genre = () => {
        let sorted = [];
        //this is slow.. break down movies in chunks
        if (!this.state.selected_genres[0]) return this.setState({ query_results: this.state.discover})

        for (let a in this.state.query_results) {
            let movie = this.state.query_results[a];
            for (let b in movie.genre_ids) {
                for (let c in this.state.selected_genres) {
                    if (movie.genre_ids[b] == this.state.selected_genres[c]) sorted.push(movie)
                }
            }
        }


        return this.setState({ query_results: sorted });
 
    }

    add_genre = (e) => {
        let genres = this.state.selected_genres;
        let id = e.target.value;
        let remove;

        for (let a in genres) {
            if (genres[a] == id) remove = a;
        }

        if (remove)
            genres.splice(remove, 1);
        else
            genres.push(id);

        this.setState({ selected_genres: genres })
        this.sort_movies_by_genre();
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
                <input type="checkbox" onClick={(e) => this.add_genre(e)} value={this.state.genres[a].id}></input>
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
                        {/* <a href="/discover">Discover</a> */}

                    </div>
                </div>
                <div className="sort_movies">
                    <div className="sort_box">
                        <div className="header"><h3>Genre</h3></div>
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