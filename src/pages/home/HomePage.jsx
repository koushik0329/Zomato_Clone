import React from "react";
import { useState } from "react";

import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import TabOptions from "../../components/common/tabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut";
import NightLife from "../../components/nightLife/NightLife";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getDifferentScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getDifferentScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default Homepage;
