import { ContainerBanner } from "./styled"

interface BannerProps{
    id: number,
    title: string,
    overview: string,
    vote_average: number,
    backdrop_path:string,
}
export const Banner: React.FC<BannerProps> = (props)=>{

    const image_path = "https://image.tmdb.org/t/p/w500"

    function truncate(str: string , n:number){
        return str.length > n ? str.substring(0, n-1) + "...": str;   
    }

    return(
        <ContainerBanner >
            <img
                src={`${image_path}${props.backdrop_path}`}
                alt="background-Img"
                className="backImg"
            />
            <div className="info-movie">
                <h1 className="title">{props.title}</h1>
                <h2 className="ranting">Avaliação: {props.vote_average} / 10</h2>
                <div className="btns">
                    <button onClick={()=>{alert("sdasd")}} className="bottom">Trailer</button>
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