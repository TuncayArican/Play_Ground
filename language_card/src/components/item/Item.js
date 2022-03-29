import "./Item.css"
import { useState } from "react";

const Item = ({card}) => {

  const [showLogo, setShowLogo] = useState(true);

  return (
      <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
      <div>
        <img className="card-logo" src={card.img} alt="logo" />
        <h3 className="card-title">{card.name}</h3>
      </div>
      ):
      <div>
        <ul className="list">
          {card.options.map((option, index) => {
          return <li>{option}</li>;
        }) 
          }
        </ul>
      </div>
}
    </div>
  );
}

export default Item
