import { List, ListItem, ListItemText, IconButton, Drawer } from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

export const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="top"
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#9ED8DE",
                fontFamily: "Chela One",
                fontSize: "26px",
              }}
            >
              Projects
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#9ED8DE",
                fontFamily: "Chela One",
                fontSize: "26px",
              }}
            >
              Peer Reviews
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#9ED8DE",
                fontFamily: "Chela One",
                fontSize: "26px",
              }}
            >
              Recognition
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText
              disableTypography={true}
              sx={{
                color: "#9ED8DE",
                fontFamily: "Chela One",
                fontSize: "26px",
              }}
            >
              Resume
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon htmlColor="#9ED8DE" />
      </IconButton>
    </>
  )
}
