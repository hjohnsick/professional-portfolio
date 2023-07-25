import { Box, Stack, Typography } from "@mui/material"
import { SwiperElement } from "./SwiperElement"
import slides from "../data/recognition.json"

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
        <SwiperElement slides={slides} />
      </Box>
    </Stack>
  )
}
