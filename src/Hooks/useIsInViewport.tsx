import { createTheme, useMediaQuery } from "@mui/material"

type BreakpointSizes = "sm" | "md" | "lg"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export const useIsInViewport = (size: BreakpointSizes): boolean => {
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMed = useMediaQuery(theme.breakpoints.between("md", "lg"))
  const isLg = useMediaQuery(theme.breakpoints.up("lg"))

  switch (size) {
    case "sm":
      return isSmall
    case "md":
      return isMed
    case "lg":
      return isLg
    default:
      return false
  }
}
