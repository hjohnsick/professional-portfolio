import { Box, Stack, Typography } from "@mui/material"
import { SwiperElement } from "./SwiperElement"
import americaSavesWeek from "../assets/americaSavesWeek.png"
import bootcamp from "../assets/bootcamp.png"
import doTheRightThing from "../assets/doTheRightThing.png"
import eagleEye from "../assets/eagleEye.png"
import eyeForDetail from "../assets/eyeForDetail.png"
import hlbpLaunch from "../assets/hlbpLaunch.png"
import hlbpProduction from "../assets/hlbpProduction.png"
import mentor from "../assets/mentor.png"
import myAccess from "../assets/myAccess.png"

export const Recognition = () => {
  return (
    <Stack paddingBottom={8}>
      <Typography
        id="recognition"
        component="h2"
        sx={{
          fontFamily: "Quicksand",
          paddingBottom: 1,
          fontSize: 26,
        }}
        px={{ xs: 3, lg: 10 }}
        pt={8}
      >
        Recognition
      </Typography>
      <Box pt={4}>
        <SwiperElement
          slides={[
            eagleEye,
            eyeForDetail,
            hlbpProduction,
            doTheRightThing,
            bootcamp,
            mentor,
            americaSavesWeek,
            hlbpLaunch,
            myAccess,
          ]}
        />
      </Box>
    </Stack>
  )
}
