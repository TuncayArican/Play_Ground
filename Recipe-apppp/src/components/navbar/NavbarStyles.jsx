import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  /* resmin olduğu div */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  i {
    font-family: "Girassol", sans-serif;
  }
  span {
    font-family: "Girassol", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;