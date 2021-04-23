import React, { Component } from "react";
import InfoSection from "../components/InfoSection";
import Title from "../components/Title";


class MobilePage extends Component {
  constructor(props) {
    super(props);
  }

  makeSection = (mobObj) => {
    return mobObj.map((mobObjs) => {
      return (
        <InfoSection
          lightBg={mobObjs.lightBg}
          id={mobObjs.id}
          imgStart={mobObjs.imgStart}
          topLine={mobObjs.topLine}
          lightText={mobObjs.lightText}
          headline={mobObjs.headline}
          darkText={mobObjs.darkText}
          description={mobObjs.description}
          buttonLabel={mobObjs.buttonLabel}
          img={mobObjs.img}
          alt={mobObjs.alt}
          primary={mobObjs.primary}
          dark={mobObjs.dark}
          dark2={mobObjs.dark2}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Title title={this.props.title} subTitle={this.props.subTitle} />
       
          {this.makeSection(this.props.mobObj)}
      </div>
    );
  }
}

export default MobilePage;
