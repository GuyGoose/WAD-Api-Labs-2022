import React, { useContext, useState} from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ShowList from "../showList";
import Grid from "@mui/material/Grid";
import Pages from "../sitePages";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { ShowsContext } from "../../contexts/showsContext";



function ShowListPageTemplate({ shows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {pgNum} = useContext(ShowsContext);

  let displayedShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>

      <Grid item xs={12}>
        <Header title={title} />
      </Grid>

      <Grid>
        <Grid item container xs={12} spacing={4}>
        <ShowList action={action} shows={displayedShows}></ShowList>

        </Grid>

        <Grid item xs = {12}>
          <Box display = "flex"
          justifyContent = "right"
          alignItems = "center"
          sx = {{paddingTop : 2}}>

            <Pages title = {pgNum}/>

          </Box>
        </Grid>

        <Fab
          color="primary"
          variant="extended"
          onClick={() =>setDrawerOpen(true)}
          sx={{
            position: 'fixed',
            top: '5em',
            backgroundColor: 'purple', color: 'yellow',
            right: '1em'
          }}
        >
          <Typography variant="h4" component="h3">
            Search
          </Typography>
        </Fab>

        <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Grid item container spacing={5}>
            <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
              <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
              />
            </Grid>
          </Grid>
        </Drawer>

      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;