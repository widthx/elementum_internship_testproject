import "isomorphic-fetch"

import React, { Component } from 'react';
import axios from 'axios'
import queryString from 'query-string'

import '../styles/globals.scss';
import { api } from '../config/api.js';

class Index extends Component {

    componentDidMount() {
        let query = {
            sort_by: "popularity.desc",
            api_key: api.key
        }
        query = queryString.stringify(query);

        axios.get(api.base + 'discover/movie?' + query).then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}

export default Index