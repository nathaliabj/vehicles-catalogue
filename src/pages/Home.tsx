import React, { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import VehicleGrid from "../Components/VehiclesGrid";
import { fetchVehicles } from "../queries";
import { Filter, FilterWrapper, HomeWrapper, Title } from "./Home.styles";

const Home: FC = () => {
  const { data: allVehicles } = useQuery("vehicles", fetchVehicles);
  const [rangeFilter, setRangeFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [colorFilter, setColorFilter] = useState<string>("");
  const [vehiclesToDisplay, setVehiclesToDisplay] = useState<any[]>([]);

  useEffect(() => {
    if (rangeFilter || priceFilter || colorFilter) {
      const findVehicles = allVehicles?.filter((vehicle: any) => {
        let foundVehicles;
        if (rangeFilter) {
          foundVehicles = +vehicle.range.distance <= +rangeFilter;
        }
        if (priceFilter) {
          foundVehicles = +vehicle.price.split(" ")[0] <= parseInt(priceFilter);
        }

        if (colorFilter) {
          foundVehicles = vehicle.colors.includes(colorFilter);
        }

        return foundVehicles;
      });
      setVehiclesToDisplay(findVehicles || []);
    }
  }, [rangeFilter, allVehicles, priceFilter, colorFilter]);

  return (
    <HomeWrapper>
      <Title>Vehicles catalogue</Title>

      <FilterWrapper>
        <label>
          Filter by range
          <Filter
            name="range"
            placeholder="Max km desired"
            value={rangeFilter}
            onChange={(e) => setRangeFilter(e.target.value)}
          />
        </label>
        <label>
          Filter by price
          <Filter
            placeholder="Max price desired"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </label>
        <label>
          Filter by color
          <select
            name="cars"
            id="cars"
            onChange={(e) => setColorFilter(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
          </select>
        </label>
      </FilterWrapper>
      <VehicleGrid
        listOfVehicles={
          (vehiclesToDisplay.length && vehiclesToDisplay) || allVehicles
        }
      />
    </HomeWrapper>
  );
};

export default Home;
