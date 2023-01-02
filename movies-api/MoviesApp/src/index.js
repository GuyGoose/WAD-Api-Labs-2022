import React from "react";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TVShowsPage from "./pages/tvShowsPage";
import ShowsContextProvider from "./contexts/showsContext";
import ShowPage from "./pages/showDetailsPage";
import TopRatedShows from "./pages/topRatedShowsPage";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <ShowsContextProvider>
            <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route exact path="/shows/pg:pageNumber" element={<TVShowsPage />} />
        <Route exact path="/shows/toprated" element={<TopRatedShows />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/shows/:id" element={<ShowPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/movies/pg1" /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />

        </Routes>
        </ShowsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);