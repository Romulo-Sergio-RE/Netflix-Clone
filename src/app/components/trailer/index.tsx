import { Container } from "./styled"
import { FaTimes } from "react-icons/fa";


interface trailerProps {
    trailerKey?:any[] 
    name?: string
    closeTrailer?: () => void
}
export const TrailerMovieAndTvShows: React.FC<trailerProps> = (props) =>{

    const urlYoutube = "https://www.youtube.com/embed/"
    const keyTrailer = props.trailerKey?.find((a)=> a.name === "Official Trailer" )

    return(
        <Container>
            <div className="trailer">
                <iframe 
                    src={`${urlYoutube}${keyTrailer.key}`}
                    title="trailer the movie and the tv shows"
                    allowFullScreen
                />
                <FaTimes 
                    className="button-close" 
                    onClick={props.closeTrailer}
                />
            </div>
        </Container>
    )
}