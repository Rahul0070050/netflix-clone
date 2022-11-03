import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { urls } from '../../utils'
import { useStyle } from './style'

function MovieList({ category, url }) {
    // styles
    const Classes = useStyle()

    const [movies, setMovies] = useState([{ overview: '', poster_path: '', title: '' }])
    const [movieId, setMovieId] = useState(0)

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res => {
            console.log(res);
            setMovies(res.results)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    function handleClick(id) {
        let url = urls.getMovieTrailer(id)
        console.log(url);
        fetch(url).then(res => res.json()).then(res => {
            if(res?.results?.length > 0) {
                setMovieId(res.results[0])
            }
            console.log(res.results[0]);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <section className={Classes.section}>
            <h1 className={Classes.h1}>{category}</h1>
            <div className={Classes.row}>
                {movies.map((movie, index) => (
                    <div className={Classes.card} key={index} onClick={() => handleClick(movie.id)}>
                        <span className={Classes.rating}>{Math.ceil(movie.vote_average * 100) / 100}</span>
                        <img src={'https://image.tmdb.org/t/p/w200/' + movie.poster_path} alt="" />
                        <div className={Classes.info}>
                            <div className={Classes.name}>
                                <span><strong>{movie.title}</strong></span>
                            </div>
                            <div>
                                {movie.overview}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {movieId && <YouTube videoId={movieId.key} opts={opts} />}
        </section>
    )
}

export default MovieList
