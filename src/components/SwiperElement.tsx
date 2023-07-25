// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../styles.css"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

import { SliderData } from "../interfaces"
import { Box } from "@mui/material"
import { useIsInViewport } from "../Hooks/useIsInViewport"

type Props = {
  slides: SliderData[]
}

export const SwiperElement = ({ slides }: Props) => {
  const isSmall = useIsInViewport("sm")
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={isSmall ? false : true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide: { image: string }) => (
          <SwiperSlide>
            <Box>
              <Box
                component="img"
                src={slide.image}
                alt=""
                height="100%"
                width="100%"
                sx={{ objectFit: "cover" }}
              ></Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
