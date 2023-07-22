import { AppBar, Stack, Toolbar, Typography, Link } from "@mui/material"

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F4FDFE", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#9ED8DE",
            fontFamily: "Chela One",
            fontSize: 36,
          }}
        >
          Heather Johnsick
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link color="#9ED8DE" fontFamily="Chela One" fontSize="26px">
            Projects
          </Link>
          <Link color="#9ED8DE" fontFamily="Chela One" fontSize="26px">
            Peer Reviews
          </Link>
          <Link color="#9ED8DE" fontFamily="Chela One" fontSize="26px">
            Recognition
          </Link>
          <Link color="#9ED8DE" fontFamily="Chela One" fontSize="26px">
            Resume
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
