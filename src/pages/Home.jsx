import React from "react";
import Layout from "../componenets/Layout";

import Herosection from "../componenets/Herosection";
import Service from "../componenets/Service";
import Gallery from "../componenets/Gallery";
import Allproducts from "../componenets/Allproducts";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Service />
      <Gallery />
    </Layout>
  );
}

export default Home;
