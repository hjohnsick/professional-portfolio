import { AppBar, Stack, Toolbar, Typography, Link } from "@mui/material"
import { useIsInViewport } from "../Hooks/useIsInViewport"
import { DrawerComponent } from "./DrawerComponent"

export const NavBar = () => {
  const isSmall = useIsInViewport("sm")

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F4FDFE", boxShadow: "none" }}
    >
      <Toolbar>
        {isSmall && (
          <>
            <DrawerComponent />
          </>
        )}
        {!isSmall && (
          <>
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
            <Stack direction={{ sm: "column", md: "row" }} spacing={3}>
              <Link
                color="#9ED8DE"
                fontFamily="Chela One"
                fontSize="26px"
                underline="hover"
              >
                Projects
              </Link>
              <Link
                color="#9ED8DE"
                fontFamily="Chela One"
                fontSize="26px"
                underline="hover"
              >
                Peer Reviews
              </Link>
              <Link
                color="#9ED8DE"
                fontFamily="Chela One"
                fontSize="26px"
                underline="hover"
              >
                Recognition
              </Link>
              <Link
                color="#9ED8DE"
                fontFamily="Chela One"
                fontSize="26px"
                underline="hover"
              >
                Resume
              </Link>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
