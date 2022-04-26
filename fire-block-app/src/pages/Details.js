import { useContext } from "react";
import { useLocation } from 'react-router-dom'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  return (
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }}>
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
                {currentUser?.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(`/update-blog/${item.id}`,{ state: { item } } )}>
                Update
              </Button>
            </CardActions>
          </Card>
      </Box>
    )}

export default Details