import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

/* eslint-disable jsx-a11y/anchor-has-content */

const MyLink = props => (
  <a
    href="https://app.eatdrinkhealthy.co/"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

const styles = {
  bannerButton: {
    color: "white",
    fontWeight: "bold",
    width: "140px",
  },
};

const Banner = ({ classes: { bannerButton } }) => (
  <section className="banner-container">
    <div className="banner-headline">
      A platform to find, share, and discuss healthy places to shop and eat.
    </div>
    <Button
      variant="extendedFab"
      color="primary"
      className={bannerButton}
      component={MyLink}
    >
      Web App
    </Button>
  </section>
);

Banner.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Banner);
