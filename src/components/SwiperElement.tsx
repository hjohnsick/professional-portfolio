// import function to register Swiper custom elements
import { register } from "swiper/element/bundle"
// register Swiper custom elements
register()
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles.css"
import { Pagination, Navigation } from "swiper/modules"
import { Box } from "@mui/material"
import { useIsInViewport } from "../Hooks/useIsInViewport"

import americaSavesWeek from "../assets/americaSavesWeek.png"
import bootcamp from "../assets/bootcamp.png"
import doTheRightThing from "../assets/doTheRightThing.png"
import eagleEye from "../assets/eagleEye.png"
import eyeForDetail from "../assets/eyeForDetail.png"
import hlbpLaunch from "../assets/hlbpLaunch.png"
import hlbpProduction from "../assets/hlbpProduction.png"
import mentor from "../assets/mentor.png"
import myAccess from "../assets/myAccess.png"

const slides = [
  eagleEye,
  eyeForDetail,
  hlbpProduction,
  doTheRightThing,
  bootcamp,
  mentor,
  americaSavesWeek,
  hlbpLaunch,
  myAccess,
]

export const SwiperElement = () => {
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
        {slides.map((slide) => (
          <SwiperSlide key={slide}>
            <Box>
              <Box
                component="img"
                src={slide}
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
