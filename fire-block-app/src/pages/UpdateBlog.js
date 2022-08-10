import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const UpdateBlog = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
        Update the  Blog
        </Typography>

        <form>
          <Grid container spacing={4}>

          <Grid item xs={12}>
              <TextField
                id="imageUrl"
                label="imageUrl"
                name="imageUrl"
                value={state.imageUrl}
                /* onChange={handleChange} */
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
             id="title"
             label="title"
             name="title"
             value={state.title}
             /* onChange={handleChange} */
              fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                id="content"
                label="content"
                name="content"
                
                value={state.content}
                /* onChange={handleChange} */
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
            /*     onClick={handleAdd} */
                fullWidth
              >
                Update the  Blog
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default UpdateBlog