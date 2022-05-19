import { useContext, useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams} from "react-router-dom";
import { CloseFullscreen } from "@mui/icons-material";

const Details = () => {
  const { currentUser, useFetch, info, handleFormSubmit ,DeleteUser, setInfo, editHandler} = useContext(AuthContext);
  const { id } = useParams();
  const {isLoading,contactList}=useFetch();
  const [result,setResult]=useState();


const handleDelete=()=>{
  DeleteUser(id)
  navigate("/")
  }



 useEffect(() => {
  const res = contactList?.filter((item) => item.id === id);
  const newRes = res?res[0]:null
  setResult(newRes)
},[contactList])

  const navigate = useNavigate();
  console.log(info); 
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
              image={result?.imageUrl}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {result?.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {result?.content}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {currentUser?.email}
              </Typography>
            </CardContent>
            <CardActions>
             <Button size="small" onClick={() => navigate(`/update-blog/${id}` )}>
                Update
              </Button>
              <Button size="small" onClick={() =>handleDelete()}>
                Delete
              </Button>
            </CardActions>
          </Card>
      </Box>

    )}

export default Details