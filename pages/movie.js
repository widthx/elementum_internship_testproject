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
            movie_meta: {},
            credits: {}
        }
    }

    componentDidMount() {
        let movie_id;
        let query = {
            api_key: api.key
        }
        query = queryString.stringify(query);
        movie_id = window.location.href.split('/')[4];

        axios.get(api.base + 'movie/'+movie_id+'?' + query).then(res => {
            this.setState({ movie_meta: res.data })
            console.log(this.state.movie_meta)

            axios.get(api.base + 'movie/'+movie_id+'/credits?' + query).then(res => {
                this.setState({ credits: res.data })
                console.log(this.state.credits)
            })
        }).catch(err => {
            // this.setState({ error: true })
        })
    }

    generate_actors = () => {
        let actors = [];
        let credits = this.state.credits;

        for(let a in credits.cast) {
            actors.push(<div className="actor">
            <div className="headshot">
                <img src={`https://image.tmdb.org/t/p/w276_and_h350_face${credits.cast[a].profile_path}`}></img>
            </div>
            <div className="actor_meta">
                <h4 className="name">{credits.cast[a].name}</h4>
                <h4 className="character">{credits.cast[a].character}</h4>
            </div>
            </div>)
        }

        return (actors);
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                {/* <h3>{this.state.error}</h3>
                { this.state.error &&
                    <div>
                        <h3 className="error">Error:</h3>
                        <h5>This movie doesnt exist!</h5>
                    </div>
                } */}
                <div className="view_movie">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w300${this.state.movie_meta.poster_path}`}></img>
                    </div>
                    <div className="meta">
                        <div className="movie_title">
                            <h3>{this.state.movie_meta.title}</h3>
                        </div>
                        <div className="rating">
                            <FontAwesomeIcon icon='star' className="star"/>
                            <h6 className="rating_avg">{this.state.movie_meta.vote_average}</h6>
                        </div>

                        <p>{this.state.movie_meta.overview}</p>

                        <div className="actors">
                            {this.generate_actors()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index