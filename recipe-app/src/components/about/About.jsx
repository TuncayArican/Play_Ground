import { Card } from 'react-bootstrap';
import "./aboutStyle.css";

const About = () => {
  return (
    <div className='about'>
      <h1>Tuncay ARICAN the great chef :)</h1>
      <br /><br />
      <Card border="dark" style={{ width: "35rem" , backgroundColor: "aqua"}}>
        <Card.Header>Tuncay Arıcan</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to the Recipe Heaven</Card.Title>
          <Card.Text>
           My name is Tuncay Arıcan. Even though I am not a good cook, I can provide you with a recipe
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default About;
