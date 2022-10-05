export const getMovieAndTvShows = async (path: any) =>{
    try{
        let url = `https://api.themoviedb.org/3/${path}`
        const response = await fetch(url)
        return await response.json()
    }catch{
        console.log(`erro in getMovie${Error}`)
    }
}