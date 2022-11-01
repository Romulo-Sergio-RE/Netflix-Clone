import { useState } from "react"
import { getTrailerMovie, getTrailerTvShows } from "../../hooks/trailer"
import { TrailerMovieAndTvShows } from "../trailer"
import { ContainerBanner } from "./styled"

interface BannerProps{
    id: number,
    title: string,
    name: string,
    overview: string,
    vote_average: number,
    backdrop_path:string,
    media_type:string
}
export const Banner: React.FC<BannerProps> = (props)=>{

    const image_path = "https://image.tmdb.org/t/p/w500"
    const [trailer,setTrailer] = useState<any []>([])
    const [isTrailerOpen,setIsTrailerOpen] = useState(false)

    function truncate(str: string , n:number){
        return str.length > n ? str.substring(0, n-1) + "...": str;   
    }

    const WatchTrailer = async (id: any, media_type: any) =>{
        if(media_type === "movie"){
            const data = await getTrailerMovie(id)
            setTrailer(data.results)
            setIsTrailerOpen(!isTrailerOpen)
            
        }else {
            const data = await getTrailerTvShows(id)
            setTrailer(data.results)
            setIsTrailerOpen(!isTrailerOpen)
        }
    }

    return(
        
        <ContainerBanner >
            {isTrailerOpen?
                <TrailerMovieAndTvShows 
                    trailerKey={trailer}
                    closeTrailer={() => setIsTrailerOpen(!isTrailerOpen)}
                />:null
            },
            <img
                src={`${image_path}${props.backdrop_path}`}
                alt="background-Img"
                className="backImg"
            />
            <div className="info-movie">
                <h1 className="title">{props.title}{props.name}</h1>
                <h2 className="ranting">Avaliação: {props.vote_average} / 10</h2>
                <div className="btns">
                    
                    <button onClick={()=>{alert("sdasd")}} className="bottom">Know more</button>
                </div>
                {props.overview?
                    <p className="overview">{truncate(props.overview, 100)}</p>
                    :null
                }
            </div>
        </ContainerBanner>
    )
}