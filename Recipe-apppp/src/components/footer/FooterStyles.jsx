
import styled from "styled-components";
import { Link } from "react-router-dom";



export const FooterContainer = styled.div`
  /* resmin olduğu div */
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const FooterImg = styled.img`
  /* yuvarlağın içindeki üstteki küçük resim */

  width: 50px;
  margin: 1rem;
`;


export const HeaderFooter = styled(Link)`
  /* clarusway başlığı yazan yer */
  color: black;
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`;


export const FooterSpan = styled.span`
  /* clarusway başlığı yazan yer */
  font-family: "Girassol", sans-serif;
  font-size: 2rem;
`;