import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    height: "400px",
    border: "2px solid brown",
    margin: "5px",
    padding: "5px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    border: "1px dashed blue",
    width: "80px",
    textAlign: "center",
  },
  form: {
    border: "1px dashed green",
    width: "80px",
    textAlign: "center",
  },
};

const Contact = props => {
  const {
    classes: { container, image, form },
  } = props;

  return (
    <div id="contact" className={container}>
      <span className={image}>Image</span>
      <span className={form}>Form</span>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Contact);
