import React, { FC } from "react";
import { useQuery } from "react-query";
import { fetchVehicle } from "../queries";
import {
  Make,
  VehicleWrapper,
  Image,
  Price,
  Range,
  Colors,
} from "./Vehicle.styles";

const Vehicle: FC = () => {
  const vehicleId = "24uobf24jlgb";
  const { data: vehicle } = useQuery(["vehicle", vehicleId], () =>
    fetchVehicle(vehicleId)
  );

  if (!vehicle) {
    return null;
  }

  return (
    <VehicleWrapper>
      <Make>{`${vehicle.make} ${vehicle.model}`}</Make>
      <Image src={vehicle.photo} alt={`${vehicle.make} ${vehicle.model}`} />

      <Colors>{`Colors: ${vehicle.colors.join(", ")}`}</Colors>
      <Price>{`Price: ${vehicle.price}`}</Price>
      <Range>{`Range: ${vehicle.range.distance} ${vehicle.range.unit}`}</Range>
    </VehicleWrapper>
  );
};

export default Vehicle;
