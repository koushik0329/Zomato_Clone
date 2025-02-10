import React from "react";
import { restaurants } from "../../data/restaurants";
import Filter from "../common/filters/Filter";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections/DeliveryCollections";
import TopBrands from "./topBrands/TopBrands";
import ExploreSection from "../common/exploreSection/ExploreSection";

const deliveryFilter = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurentList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterlist={deliveryFilter} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurentList}
        collectionName="Delivery Restaurants in Hyderabad"
      />
    </div>
  );
};

export default Delivery;
