import React from "react";
import "./Logo.css";
import logo from "../img/logo_brush.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <h3>LOGO</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        quisquam at cumque officia corrupti enim temporibus rerum deserunt,
        totam laboriosam ullam dolor architecto aspernatur aut a et ex amet
        numquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        reiciendis excepturi cum laudantium blanditiis! Excepturi similique
        voluptatibus dolor ad, voluptate tempore dicta quam molestias eveniet,
        ab debitis laborum maxime! Corrupti, ipsa quisquam. Nam, debitis sequi
        mollitia delectus culpa recusandae, ullam accusamus praesentium, fuga
        porro eligendi quaerat impedit reprehenderit iure iusto.
      </p>
    </div>
  );
};

export default Logo;
