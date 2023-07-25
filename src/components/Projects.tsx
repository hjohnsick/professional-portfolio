import { Box, Link, Stack, Typography } from "@mui/material"
import santander from "../assets/santander.png"
import refer from "../assets/refer.png"
import { BasicCard } from "./BasicCard"

export const Projects = () => {
  return (
    <>
      <Typography
        id="projects"
        component="h2"
        sx={{
          fontFamily: "Quicksand",
          paddingBottom: 1,
          fontSize: 26,
        }}
        px={{ xs: 3, lg: 10 }}
      >
        Projects I've Worked On
      </Typography>
      <Stack px={{ xs: 3, lg: 10 }} pt={4} alignItems="center">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ md: 4, lg: 10 }}
        >
          <Stack
            sx={{ maxWidth: 500, maxHeight: 600 }}
            paddingTop={{ xs: 8, md: 0 }}
            order={{ xs: 2, md: 0 }}
          >
            <Link
              href="https://www.rocketmortgage.com/partners/welcome/santander"
              target="_blank"
              rel="noreferrer"
              underline="none"
            >
              <Box
                component="img"
                src={santander}
                alt="Rocket Mortgage partner landing page for Santander Bank."
                height="100%"
                width="100%"
                sx={{ objectFit: "cover", borderRadius: 2 }}
              />
            </Link>
          </Stack>
          <BasicCard
            projectName="Partner Landing Pages"
            description="Partner Landing Pages is a webpage used by our partners to submit mortgage leads."
            technologies="Partner Landing Pages uses C# on the back-end and Nextjs to serve up the UI.  It uses Rocket Design Systems an in house design framework based off Material UI.  It uses a combination of DynamoDB and Salesforce as it's data store.  It uses Split.io for feature flagging."
            projectInfo="I developed the hero component, the rates section, and the footer by following the specifications provided in the Figma.  I also created the API endpoints to get rates and the post request to submit the form data to our downstream systems."
          />
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ md: 4, lg: 10 }}
          pt={8}
        >
          <BasicCard
            projectName="Team Member Refer"
            description="Team Member Refer is form for Rocket Mortgage team members to give out to friends and family looking to purchase or refinace their homes."
            technologies="Team Member Refer uses React with Typescript on the front-end and C# on the back-end."
            projectInfo="I upgraded the Refer application from using Spark (deprecated in house design system) to the new Rocket Design System based off Material UI.  I also updated disclaimer information and implemented a new footer."
          />
          <Stack
            sx={{ maxWidth: 500, maxHeight: 600 }}
            paddingTop={{ xs: 8, md: 0 }}
          >
            <Link
              href="https://rktrefer.com/hj"
              target="_blank"
              rel="noreferrer"
              underline="none"
            >
              <Box
                component="img"
                src={refer}
                alt="Rocket Mortgage employee referral program form."
                height="100%"
                width="100%"
                sx={{ objectFit: "cover", borderRadius: 2 }}
              />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
