import React, { Fragment } from "react";
import Navi from "../../../components/module/navi/logged";
import Footer from "../../../components/module/footer";

import Step1 from "../../../assets/step1.jpg";
import Step2 from "../../../assets/step2.jpg";
import Step3 from "../../../assets/step3.jpg";
import { Helmet } from "react-helmet";

const DetailVideo = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Mamarecipe - Video Detail</title>
      </Helmet>
      <Navi />
      <main
        className={`container d-flex flex-column flex-md-row align-items-start justify-content-between`}
      >
        <section className={`col-12 col-md-8 mb-5`}>
          <img src={Step1} alt="" className="w-100" />
          <h3>Beef Steak with Curry Sauce - [Step 4]</h3>
          <span>HanaLohana - 3 months ago</span>
        </section>

        <section className={`col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start`}>
          <h4 className={`mt-0 mb-3`}>Next</h4>
          <div className={`d-flex flex-column align-items-start`}>
            <img src={Step2} alt="" className={`w-100`} />
            <h3>Beef Steak with Curry Sauce - [Step 5]</h3>
            <span>HanaLohana - 3 months ago</span>
          </div>
          <div className={`d-flex flex-column align-items-start`}>
            <img src={Step3} alt="" className={`w-100`} />
            <h3>Beef Steak with Curry Sauce - [Step 6]</h3>
            <span>HanaLohana - 3 months ago</span>
          </div>
          <div className={`d-flex flex-column align-items-start`}>
            <img src={Step3} alt="" className={`w-100`} />
            <h3>Beef Steak with Curry Sauce - [Step 7]</h3>
            <span>HanaLohana - 3 months ago</span>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DetailVideo;
