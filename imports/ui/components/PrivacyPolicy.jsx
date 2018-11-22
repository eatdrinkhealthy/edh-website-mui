import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    //
  },
};

const PrivacyPolicy = ({ classes }) => (
  <div className={classes.container}>
    <Typography className={classes.message} variant="h4">
      Privacy Policy.
    </Typography>
  </div>
);

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(PrivacyPolicy);
