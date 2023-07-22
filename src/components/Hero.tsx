import { Typography } from "@mui/material"

export const Hero = () => {
  return (
    <>
      <Typography sx={{ fontFamily: "Quicksand", fontSize: 36 }} component="h1">
        <div>Hello,</div> is it me your looking for?
      </Typography>
      <Typography sx={{ fontFamily: "Quicksand", fontSize: 24 }}>
        If you're looking for a software engineer with a strong attention to
        detail, who enjoys solving problems and delivering the best user
        experience then you've come to the right place.
      </Typography>
      <Typography></Typography>
    </>
  )
}
