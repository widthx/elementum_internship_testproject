import React, { Component } from 'react';

import '../styles/movie_poster.scss'

class MoviePoster extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="movie_poster">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={`https://image.tmdb.org/t/p/w200${this.props.meta.poster_path}`} />
                    </div>
                    <div className="flip-card-back">
                        <h3>{this.props.meta.title}</h3> 
                        <p>{this.props.meta.overview}</p>
                    </div>
                </div>            
            </div>
        )
    }
}

export default MoviePoster