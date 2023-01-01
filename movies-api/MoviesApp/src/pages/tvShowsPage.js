import React, { useContext } from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { ShowsContext } from "../contexts/showsContext";
import { useParams } from "react-router-dom";

const TVShowsPage = (props) => {

  //const {  data, error, isLoading, isError }  = useQuery('shows', getTVShows)

  const {setSitePageNumber, setSitePageStyle} = useContext(ShowsContext);
  const {pageNumber} = useParams();
  const {  data, error, isLoading, isError }  = useQuery([`pg${pageNumber}`,{pgNum:pageNumber}], getTVShows)
  setSitePageNumber(pageNumber);
  setSitePageStyle('shows')

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
      title="Discover TV Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavouritesIcon movie={show} />
      }}
    />
);
};
export default TVShowsPage;