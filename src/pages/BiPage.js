import React from "react";
import Title from "../components/Title";
import Mansory from "../components/Mansory";
import { photos } from "./DashboardPhotos/photos";

const BiPage = (props) => {
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
      <Mansory photos={photos} />
    </div>
  );
};

export default BiPage;
