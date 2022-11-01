const API_KEY = "8426a1374a213b578abf04fbd0c08f8a";

export const getTrailerMovie = async (movie_id: any) =>{
    try{
        let url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
        const response = await fetch(url)
        return await response.json()
    }catch{
        console.log(`erro in getTraimer${Error}`)
    }
}
export const getTrailerTvShows = async (tv_id: any) =>{
    try{
        let url = `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${API_KEY}&language=en-US`
        const response = await fetch(url)
        return await response.json()
    }catch{
        console.log(`erro in getTraimer${Error}`)
    }
}