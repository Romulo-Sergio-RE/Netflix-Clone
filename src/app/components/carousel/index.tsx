import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../cards';
import { ContainerCarousel } from './styled';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

interface carouselProps {
    dataMovieAndTvShows: any[]
    slidesPerView: number
}
export const Carousel: React.FC<carouselProps> = (props) =>{
    return(
        <ContainerCarousel>

            <Swiper
                slidesPerView={props.slidesPerView}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                {
                    props.dataMovieAndTvShows.map((movie)=>{
                        return(
                            <SwiperSlide>
                                <Card 
                                    key={movie.id}
                                    title={movie.title}
                                    imagePoster={movie.poster_path}
                                    overview={movie.overview}
                                    vote_average={movie.vote_average}
                                    media_type={movie.media_type}
                                    name={movie.name}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </ContainerCarousel>
    )
}