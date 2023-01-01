import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
    const [favourites, setFavourites] = useState( [] )
    const [myReviews, setMyReviews] = useState( {} ) 
    const [pageNumber, setPageNum] = useState([])
    const [style, setStyle] = useState([])

  const setSitePageNumber = (num) => {
    setPageNum(num);
  };

  const setSitePageStyle = (style) => {
    setStyle(style);
  };

  const addToFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) )
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  return (
    <ShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        pageNumber,
        setSitePageNumber,
        style,
        setSitePageStyle
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;