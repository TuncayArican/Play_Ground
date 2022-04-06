import { useNavigate } from "react-router-dom";


const RecipeCard = ({ recipe }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", { state: { recipe } });
  };

  const { label, image } = recipe;
  return (
    <div

      className="card"
      style={{ width: "18rem", margin: "2rem" }}
    >
      <h5 className="card-title">{label}</h5>
      <img src={image} className="card-img-top" alt="meal" />
      <div className="card-body">
        <button onClick={handleClick} className="btn btn-primary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;