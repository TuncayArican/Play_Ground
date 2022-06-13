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
import { useNavigate, useParams} from "react-router-dom";



const UpdateBlog = () => {
  const {result, setResult, handleFormEdit, useFetch} = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const {contactList}=useFetch();


  useEffect(() => {
    const res = contactList?.filter((item) => item.id === id);
    const newRes = res?res[0]:null
    setResult(newRes)
  },[contactList])
  
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target
    console.log(name,value)
    setResult({...result,[name]:value})
    console.log(result);
    console.log(contactList);
}

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <h2 className="contact-header">Update BLog</h2>
    
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleFormEdit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="title"
              value={result?.title}
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
              value={result?.imageUrl}
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
              value={result?.content}
              onChange={handleChange}
              placeholder="Content"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">

                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" type="submit" value="Submit">
              Update Blog
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default UpdateBlog;