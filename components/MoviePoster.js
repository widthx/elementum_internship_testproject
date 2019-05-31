import React, { Component } from 'react';
import Router from 'next/router'
import '../styles/movie_poster.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MoviePoster extends Component {
    constructor(props) {
        super(props)
    }

    view_movie = (id) => {
        Router.push('/movie/'+id)
    }

    render() {
        return (
            <div className="movie_poster">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={`https://image.tmdb.org/t/p/w200${this.props.meta.poster_path}`} />
                    </div>
                    <div className="flip-card-back" onClick={() => Router.push('/movie/'+this.props.meta.id)}>
                        <div className="movie_title">
                            <h3>{this.props.meta.title}</h3>
                        </div>
                        <div className="rating">
                            <FontAwesomeIcon icon='star' className="star"/>
                            <h6 className="rating_avg">{this.props.meta.vote_average}</h6>
                        </div>

                        <p className="overview">{this.props.meta.overview}</p>
                    </div>
                </div> 
            </div>
        )
    }
}

export default MoviePoster