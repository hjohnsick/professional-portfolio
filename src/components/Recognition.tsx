import { Typography } from "@mui/material"

export const Recognition = () => {
  return (
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
  )
}
