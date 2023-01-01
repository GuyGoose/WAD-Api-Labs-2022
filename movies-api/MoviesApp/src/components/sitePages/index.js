import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ShowsContext } from "../../contexts/showsContext";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Pages = (props) => {
  const navigate = useNavigate();
  const {pageNumber,style} = useContext(ShowsContext);

  const setPageNumber = (pageNum) =>{
    const newPage = parseInt(pageNumber)+parseInt(pageNum)
    if(newPage<=0) return;
    var address = '';
    switch(style){
      case 'shows':
        address = '/shows/pg'
        break;
    }
    navigate(`${address}${newPage}`, { replace: true });
  }

  const title = props.title
  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      <IconButton aria-label="go back" onClick={() => setPageNumber(-1)}>
        <ArrowBack color="primary" fontSize="large" />
      </IconButton>


      <Typography variant="h4" component="h3">
        {pageNumber}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => setPageNumber(1)}>
        <ArrowForward color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );


};

export default Pages;