import React, { useEffect, useState } from 'react'
import { useStyle } from './style'
import { urls } from '../../utils'

function Home() {
  // style
  const Classes = useStyle()
  const [popularMovies, setPopularMovies] = useState({})
  const [bannerMovie, setBannerMovie] = useState({ original_title: "", backdrop_path: "", genres: [], overview: '' })


  useEffect(() => {
    fetch(urls.latestMovie).then(res => res.json()).then(res => {
      setBannerMovie(res)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  
  return (
    <section className={Classes.home}>
      <img src={`https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path}`} alt="" />
      <div className={Classes.info}>
        <h1>{bannerMovie.original_title}</h1>
        <div>
          <button>Play</button>
          <button>My list</button>
        </div>
        <div className={Classes.genres}>
          <strong>Genres: {bannerMovie.adult}</strong>
          {bannerMovie.genres.map((data, i) => (
            <span key={i}>{data.name}</span>
          ))}
        </div>
        <span>{bannerMovie.overview}</span>
      </div>
    </section>
  )
}

export default Home