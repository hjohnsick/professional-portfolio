import { Box, Stack, Typography } from "@mui/material"
import { SwiperElement } from "./SwiperElement"

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
        <SwiperElement />
      </Box>
    </Stack>
  )
}
