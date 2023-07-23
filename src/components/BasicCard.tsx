import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import TerminalIcon from "@mui/icons-material/Terminal"
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices"

type Props = {
  projectName: string
  projectInfo: string
  technologies: string
  description: string
}

export const BasicCard = ({
  projectName,
  projectInfo,
  technologies,
  description,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: 24,
            paddingBottom: 1,
          }}
        >
          {projectName}
        </Typography>
        <Box sx={{ border: 1 }} />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            paddingTop: 2,
          }}
        >
          {description}
        </Typography>
        <Stack direction="row" spacing={2} paddingTop={2}>
          <TerminalIcon />
          <Typography
            sx={{
              fontFamily: "Quicksand",
              paddingBottom: 2,
            }}
          >
            Technologies Used
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Quicksand",
            paddingBottom: 2,
          }}
        >
          {technologies}
        </Typography>
        <Stack direction="row" spacing={2} paddingTop={2}>
          <ImportantDevicesIcon />
          <Typography
            sx={{
              fontFamily: "Quicksand",
              paddingBottom: 2,
            }}
          >
            My Role
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: "Quicksand",
            paddingBottom: 2,
          }}
        >
          {projectInfo}
        </Typography>
      </CardContent>
    </Card>
  )
}
