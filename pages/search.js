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
            query: false,
            query_results: [], //movies
            sorted: false, //or []
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
                api_key: api.key,
            }

            if (input) query['query'] = input;

            if (input == "") input = false;
            if (input) this.setState({ query: input })
            else {
                //this fixed an empty search bar with selected genres.
                this.setState({ query: false, query_results: this.state.discover }, () => {
                    this.sort_movies_by_genre()
                })
                return ;
            }

        } else { //default if no value typed
            discover = true;
            path = 'discover/movie?';
            query = {
                sort_by: "popularity.desc",
                api_key: api.key
            }
        }

        console.log(this.state.query)

        query = queryString.stringify(query);

        axios.get(api.base + path + query).then(res => {
            this.setState({ query_results: res.data.results })

            //was missing this
            if (this.state.selected_genres[0])
                this.sort_movies_by_genre()

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
        let default_results;

        //if no genres selected display discover results
        if (!this.state.selected_genres[0]) return this.setState({ query_results: this.state.discover })

        for (let a in this.state.query_results) {
            let movie = this.state.query_results[a];
            let match;

            for (let b in movie.genre_ids) {
                for (let c in this.state.selected_genres) {
                    // I wasnt accounting for there being multiple matches per movie
                    if (movie.genre_ids[b] == this.state.selected_genres[c] && !match) {
                        match = true;
                        sorted.push(movie)
                    }
                }
            }
        }
        console.log("sorted", sorted);
        // I was over-writing the existing search query
        this.setState({ sorted: sorted });
        return ;
 
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

        //reset sorted results
        if (!genres[0])
            this.setState({ sorted: false })
        else
            this.sort_movies_by_genre();

    }

    componentDidMount() {
        this.search_movies()
    }

    generate_posters = () => {
        let posters = [], movies;

        // only display sorted options if there are elements .. if not display search results
        if (this.state.sorted) movies = this.state.sorted;
        else movies = this.state.query_results

        if (movies[0]) {
            for (let a in movies) {
                posters.push(<MoviePoster meta={movies[a]} key={a}></MoviePoster>)
            }
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