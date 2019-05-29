import React, { Component } from 'react';

import '../styles/movie_poster.scss'

class MoviePoster extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="movie_poster"
                style={{ backgroundImage: "url('https://image.tmdb.org/t/p/w300"+this.props.meta.poster_path+"')"}}>
            </div>
        )
    }
}

export default MoviePoster