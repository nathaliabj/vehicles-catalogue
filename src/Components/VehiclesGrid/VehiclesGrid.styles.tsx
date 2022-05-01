import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridWrapper = styled.div`
  margin: 4em 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 4em;
`;

export const GridItem = styled(Link)`
  justify-self: center;
  width: 18.75em;
  background: rgba(237, 237, 237, 0.4);
  border-radius: 0.5em;
  box-shadow: 3px 4px 10px -1px rgba(0, 0, 0, 0.33);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  max-width: 100%;
  background: white;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  padding: 0.4em;
`;

export const DescriptionKey = styled.span`
  font-weight: 700;
  margin-right: 0.3em;
`;
