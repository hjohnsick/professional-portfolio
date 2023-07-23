import { Stack, Typography, Box, Link } from "@mui/material"
import hero from "../../public/hero.png"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export const Hero = () => {
  return (
    <Stack direction={{ sm: "column", md: "row" }} marginTop={8} mx={3}>
      <Box paddingRight={{ md: 3 }}>
        <Typography
          sx={{ fontFamily: "Quicksand", fontSize: 36 }}
          component="h1"
        >
          <div>Hello,</div> is it me your looking for?
        </Typography>
        <Typography sx={{ fontFamily: "Quicksand", fontSize: 24 }}>
          If you're looking for a software engineer with a strong attention to
          detail, who enjoys solving problems and delivering the best user
          experience then you've come to the right place.
        </Typography>
        <Stack alignItems="center" paddingTop={3}>
          <Typography sx={{ fontFamily: "Quicksand", fontSize: 16 }}>
            Let's connect!
          </Typography>
          <Link
            href="https://www.linkedin.com/in/heather-johnsick/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" sx={{ color: "#3CDAEA" }} />
          </Link>
        </Stack>
      </Box>
      <Stack
        sx={{ maxWidth: 500, maxHeight: 600 }}
        paddingTop={{ xs: 3, md: 0 }}
        alignSelf={{ xs: "center", md: "flex-end" }}
      >
        <Box
          component="img"
          src={hero}
          alt=""
          height="100%"
          width="100%"
          sx={{ objectFit: "cover" }}
        />
      </Stack>
    </Stack>
  )
}
