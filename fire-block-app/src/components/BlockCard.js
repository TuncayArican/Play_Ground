
import {useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";



const BlockCard = () => {

  const navigate = useNavigate();

const { useFetch, currentUser} = useContext(AuthContext);

const {isLoading,contactList}=useFetch();


 return (
  <>
    {isLoading && (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
      
      </Box>
    )}

    {!isLoading && (
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {contactList?.map((item, index) => (
          
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.imageUrl}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>


              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>

              <Typography gutterBottom variant="h5" component="div">
                {currentUser.email}
              </Typography>
            </CardContent>
            <CardActions>
              
              <Button size="small"  onClick={() => navigate(`/details/${item.id}`)}>
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    )}
  </>
);
};

export default BlockCard;

