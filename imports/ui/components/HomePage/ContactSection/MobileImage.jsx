import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {},
  image: {
    border: "1px dashed blue",
    textAlign: "center",
  },
};

const MobileImage = props => {
  const {
    classes: { root, image },
  } = props;

  return (
    <div className={root}>
      <span className={image}>Mobile Image</span>
    </div>
  );
};

MobileImage.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(MobileImage);
