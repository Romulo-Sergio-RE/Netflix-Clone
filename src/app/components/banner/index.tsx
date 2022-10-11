import { ContainerBanner } from "./styled"

interface BannerProps{
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
        <ContainerBanner imageBanner={`${image_path}${props.backdrop_path}`}>
            <div className="info-movie">
                <h1 className="title">{props.title}</h1>
                <h2 className="ranting">Avaliação: {props.vote_average} / 10</h2>
                <div className="btns">
                    <button onClick={()=>{alert("sdasd")}} className="bottom">Assistir</button>
                    <button onClick={()=>{alert("sdasd")}} className="bottom">Saiba Mais</button>
                </div>
                {props.overview?
                    <p className="overview">{truncate(props.overview, 100)}</p>
                    :null
                }
            </div>
        </ContainerBanner>
    )
}