import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileImage from "./MobileImage";
import ContactForm from "./ContactForm";

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
};

const ContactSection = props => {
  const {
    classes: { container },
  } = props;

  return (
    <div id="contact" className={container}>
      <MobileImage />
      <ContactForm />
    </div>
  );
};

ContactSection.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(ContactSection);
