import { AppBar, Box, Button, InputBase, styled, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../redux/searchSlice";
import { useRouter } from "next/router";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#221F1F"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#F5F5F1",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
}));


const Navbar = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const router = useRouter()
  
  const handleSearch = () => {
    dispatch(addQuery(query))
  }
  
  return (
    <AppBar>
      <StyledToolbar>
        <Typography onClick={() => router.push('/')} variant="h5">MoviesDB</Typography>

        <Box margin="auto" width="40%" display="flex">
            <Search>
              <InputBase
                placeholder="Search movies..."
                onChange={(e) => {
                    setQuery(e.target.value)
                    if (!e.target.value) {
                        dispatch(addQuery("game"));
                    }
                }}
              ></InputBase>
            </Search>
            <Button
              onClick={handleSearch}
              variant="contained"
              sx={{
                backgroundColor: "#221F1F",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              Search
            </Button>
        </Box>

      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar