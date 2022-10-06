import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../cards';
import { ContainerCarousel } from './styled';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface carouselProps {
    dataMovieAndTvShows: any[]
    typeCard: string
    slidesPerView: number
}
export const Carousel: React.FC<carouselProps> = (props) =>{

    const displayMovieAndTvShows = (arrayMovie: any[], typeCard: string) =>{
        return arrayMovie.map((movie)=>{
            return(
                <SwiperSlide>
                    <Card 
                        key={movie.id}
                        imagePoster={movie.poster_path}
                        title={movie.title}
                        synopsis={movie.vote_average}
                        rating={movie.overview}
                        typeCard={typeCard}
                    />
                </SwiperSlide>
            )
        })
    }
    
    return(
        <ContainerCarousel>
            <Swiper
                slidesPerView={props.slidesPerView}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                {
                    displayMovieAndTvShows(props.dataMovieAndTvShows, props.typeCard)
                }
            </Swiper>
        </ContainerCarousel>
    )
}