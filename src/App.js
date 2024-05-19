import { useState } from "react";
import "./App.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import componentsObject from "./utils/components";

const drawerWidth = 240;

const components = componentsObject;

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("UpdatingArray");

  const toggleOpenSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleCurrentComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  const renderComponent = () => {
    const Component = components[currentComponent];
    return <Component />;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={isSideBarOpen}
        sx={{
          width: isSideBarOpen ? drawerWidth : 0,
          height: "90%",
          flexShrink: 0,
          transition: 'width 0.3s',
          '& .MuiDrawer-paper': {
            width: isSideBarOpen ? 240 : 0,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <IconButton
          onClick={toggleOpenSideBar}
          sx={{
            position: 'fixed',
            top: '94%',
            left: 15,
            zIndex: 1300,
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'lightgray',
            },
          }}
        >
          <DoubleArrowIcon />
        </IconButton>
        <List>
          {Object.keys(components).map((comp) => {
            return (
              <ListItemButton
                onClick={() => handleCurrentComponent(comp)}
                divider
                key={comp}
              >
                <ListItemText primary={comp} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {renderComponent()}
      </Box>
    </Box>
  );
}

export default App;
