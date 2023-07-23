import { Stack, Typography, Box, Link } from "@mui/material"
import hero from "/hero.png"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import MailOutlineIcon from "@mui/icons-material/MailOutline"

export const Hero = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      py={8}
      px={{ xs: 3, lg: 10 }}
    >
      <Box paddingRight={{ md: 3, lg: 10 }}>
        <Typography
          sx={{ fontFamily: "Quicksand", fontSize: 36 }}
          component="h1"
        >
          <div>Hello,</div> is it me your looking for?
        </Typography>
        <Typography sx={{ fontFamily: "Quicksand", fontSize: 24 }}>
          If you're looking for a software engineer with a strong attention to
          detail, who enjoys problem solving and delivering the best user
          experience then you've come to the right place.
        </Typography>
        <Stack alignItems="center" paddingTop={3}>
          <Typography sx={{ fontFamily: "Quicksand", fontSize: 16 }}>
            Let's connect!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.linkedin.com/in/heather-johnsick/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" sx={{ color: "#3CDAEA" }} />
            </Link>
            <Link
              href="mailto:hjohnsick@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              <MailOutlineIcon fontSize="large" sx={{ color: "#3CDAEA" }} />
            </Link>
          </Stack>
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
          alt="Heather standing in front of restaurant decorated with lobster buoys."
          height="100%"
          width="100%"
          sx={{ objectFit: "cover", borderRadius: 10 }}
        />
      </Stack>
    </Stack>
  )
}
