import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  image: {
    border: "1px dashed blue",
    width: "80px",
    textAlign: "center",
  },
};

const MobileImage = props => {
  const {
    classes: { image },
  } = props;

  return <span className={image}>Mobile Image</span>;
};

MobileImage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(MobileImage);
