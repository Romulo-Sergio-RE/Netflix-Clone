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
        let teste = str.length
        return teste > n ? str.substr(0, n-1) + "...": str;   
    }
    return(
        <ContainerBanner imageBanner={`${image_path}${props.backdrop_path}`}>
            <h1 className="title">{props.title}</h1>
            <h2 className="ranting">Rating: {props.vote_average}</h2>
            <div className="btn">
                <button>Assistir</button>
                <button>Saiba Mais</button>
            </div>
            {props.overview?

                <p className="overview">{props.overview.substring(0,100)+"..."}</p>
                :null
            }
        </ContainerBanner>
    )
}