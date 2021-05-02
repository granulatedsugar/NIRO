import React from "react";
import Title from "../components/Title";
import Mansory from "../components/Mansory";

const DesignPage = (props) => {
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
      <Mansory />
    </div>
  );
};

export default DesignPage;
