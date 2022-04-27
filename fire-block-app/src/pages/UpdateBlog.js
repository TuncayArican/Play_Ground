import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState,useContext } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const { info, handleFormSubmit , setInfo, editHandler} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  setInfo(item)

  const handleChange=(e)=>{
    e.preventDefault();
     const {name,value}=e.target
    console.log(name,value)
   } 

  


  console.log(info)
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/clarusway"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<Clarusway/> "}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Blog</h2>
    
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="title"
              value={info?.title}
              onChange={handleChange}
              placeholder="Title"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="imageUrl"
              value={info?.imageUrl}
              onChange={handleChange}
              placeholder="ImageUrl"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">

                  </InputAdornment>
                ),
              }}
            />
             <TextField
              variant="outlined"
              name="content"
              value={info?.content}
              onChange={handleChange}
              placeholder="Content"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">

                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" type="submit" value="Submit" >
              Update
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default UpdateBlog