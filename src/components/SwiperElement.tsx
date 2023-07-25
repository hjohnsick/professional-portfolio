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

import americaSavesWeek from "../assets/AmericaSavesWeek.png"
import bootcamp from "../assets/Bootcamp.png"
import doTheRightThing from "../assets/DoTheRightThing.png"
import eagleEye from "../assets/EagleEye.png"
import eyeForDetail from "../assets/EyeForDetail.png"
import hlbpLaunch from "../assets/HLBPLaunch.png"
import hlbpProduction from "../assets/HLBPProduction.png"
import mentor from "../assets/Mentor.png"
import myAccess from "../assets/MyAccess.png"

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
