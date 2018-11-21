import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    margin: "5px 0 5px 0",
  },
};

const Logo = ({ classes }) => (
  <div className={classes.container}>
    <a href="/">
      <img src="images/logo.png" alt="Company Logo" />
    </a>
  </div>
);

Logo.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Logo);
