import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const ProjectCarousel = ({ project }) => {
  return (
    <div className="max-w-[50%] tablet-lg:max-w-[100%]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        effect="slide"
        speed={800}
        slidesPerView={1}
        pagination={true}
        loop={true}
      >
        {project.images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.original} alt="Demo image" className="h-[250px] w-full mobile-lg:max-h-[210px] mobile-md:max-h-[175px] mobile-xs:max-h-[170px]" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default ProjectCarousel;