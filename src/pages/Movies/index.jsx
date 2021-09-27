import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '@/store/actions/movies'

function Movie(props) {
    const { movies, dispatch } = props

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])
    return (
        <div>
            <h1>电影列表</h1>
            <ul>
                {movies.map(m => (<li key={m._id}>{m.name}</li>))}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps)(Movie)