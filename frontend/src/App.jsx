import { Box, Toast } from "@chakra-ui/react"; 
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./appComponents/Navbar.jsx";
import { useColorModeValue } from "@/components/ui/color-mode"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar/>
        <Toaster />
        <Routes>
          <Route path="/" element ={ <HomePage/> }/>
          <Route path="/create" element ={ <CreatePage/> }/>
        </Routes>
      </Box>
    </>
  )
}

export default App
