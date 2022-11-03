import React, { useEffect } from 'react'

function useFetch(url) {
    let newUrl = `https://api.themoviedb.org/3/${url}`
    useEffect(() => {
        fetch(newUrl).then(res => res.json()).then(res => {
            return [null, res]
        }).catch(err => {
            return [err, null]
        })
    }, [])
}

export default useFetch
