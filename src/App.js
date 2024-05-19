import { createElement, useState } from "react";
import "./App.css";
import UpdatingArray from "./components/UpdatingArray/UpdatingArray";
import SideBar from "./components/SideBar/SideBar";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import JokesApp from "./components/JokesApp/JokesApp";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";

const drawerWidth = 240;

const components = {
  UpdatingArray: UpdatingArray,
  JokesApp: JokesApp,
};

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
          width: isSideBarOpen ? 240 : 0,
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
            left: 15, // Adjust to make it more visible
            zIndex: 1300, // Ensure the button is above other elements
            backgroundColor: 'white', // Optional: Add background for better visibility
            '&:hover': {
              backgroundColor: 'lightgray', // Optional: Change color on hover
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
