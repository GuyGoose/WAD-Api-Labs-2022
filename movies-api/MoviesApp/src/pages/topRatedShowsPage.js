import React from "react";
import { getTopRatedShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const TopRatedShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('topratedshows', getTopRatedShows)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  // Redundant, but necessary to avoid app crashing.
  const favourites = shows.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated TV Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavouritesIcon movie={show} />
      }}
    />
);
};
export default TopRatedShowsPage;