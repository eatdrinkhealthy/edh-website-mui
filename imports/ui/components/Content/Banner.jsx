import React from "react";
import Button from "@material-ui/core/Button";

/* eslint-disable jsx-a11y/anchor-has-content */

const MyLink = props => (
  <a
    href="https://app.eatdrinkhealthy.co/"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

const Banner = () => (
  <section className="banner-container">
    <div className="banner-headline">
      A platform to find, share, and discuss healthy places to shop and eat.
    </div>
    <Button
      variant="extendedFab"
      color="primary"
      className="banner-button"
      component={MyLink}
    >
      Web App
    </Button>
  </section>
);

export default Banner;
