import { Box } from "@mui/material"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Navbar position="sticky"/>
        <Box>{children}</Box>
    </>
  )
}

export default Layout