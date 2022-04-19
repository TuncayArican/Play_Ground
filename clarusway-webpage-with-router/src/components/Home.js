import React from 'react';
import "./Home.css";
import html from "../img/logo_html.png";
import css from "../img/logo_css.png";
import brush from "../img/logo_brush.png";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="main_top">
        <div className="main_top_line">
          <h1>Professional Web Desing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            eligendi officiis vero enim, exercitationem consectetur? Quidem
            illum illo nulla dolore?
          </p>
        </div>
      </div>
      <div className="main_middle">
        <h2>Subscribe to Our Newsletter</h2>
        <form action="#">
          <input type="e-mail" placeholder="Enter e-mail" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="main_bottom">
        <div
          className="main_bottom_left 
            image"
        >
          <Link to="/html">
            <img src={html} alt="" className="image1" />
          </Link>
          <h4>HTML5 Markup</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            qui tempora!
          </p>
        </div>
        <div className="main_bottom_middle image">
          <Link to="/css">
            <img src={css} alt="" className="image1" />
          </Link>

          <h4>CSS3 Styling</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            qui tempora!
          </p>
        </div>
        <div className="main_bottom_right image">
          <Link to="/logo">
            <img src={brush} alt="" className="image1" />
          </Link>
          
          <h4>Graphic Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            qui tempora!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home