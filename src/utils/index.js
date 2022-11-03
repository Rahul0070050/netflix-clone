export const urls = {
    latestMovie: `https://api.themoviedb.org/3/movie/33?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    popular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    latest: `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    singleMovie: `https://api.themoviedb.org/3/movie/13?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    getMovieTrailer: (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    trandingToday: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    getMoviesByCategory: (id) => `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`
}