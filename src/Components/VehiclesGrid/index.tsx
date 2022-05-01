import React, { FC } from "react";
import {
    DescriptionKey,
  GridItem,
  GridWrapper,
  Image,
  ImageContainer,
  InfoWrapper,
} from "./VehiclesGrid.styles";

interface Props {
  listOfVehicles: any[];
}

const VehicleGrid: FC<Props> = ({ listOfVehicles }) => (
  <GridWrapper>
    {listOfVehicles?.map((vehicle) => (
      <GridItem key={vehicle.id} to="/vehicle">
        <ImageContainer>
          <Image src={vehicle.photo} alt={vehicle.make} />
        </ImageContainer>
        <InfoWrapper>
          <p>
            <DescriptionKey>Make:</DescriptionKey>
            {vehicle.make}
          </p>
          <p>
            <DescriptionKey>Model:</DescriptionKey>
            {vehicle.model}
          </p>
          <p>
            {" "}
            <DescriptionKey>Price:</DescriptionKey>
            {vehicle.price}
          </p>
        </InfoWrapper>
      </GridItem>
    ))}
  </GridWrapper>
);

export default VehicleGrid;
