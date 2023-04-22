import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Add from "./Add";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import { useState } from "react";



function App() {
  const [mode, setMode] = useState("light")
 const darkTheme=createTheme({
  palette:{
    mode:mode,
  }
 })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
    <SideBar setMode={setMode} mode={mode}/>
    <Feed/>
    <RightBar/>
    </Stack>
    <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
