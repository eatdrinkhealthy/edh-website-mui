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
  form: {
    border: "1px dashed green",
    width: "80px",
    textAlign: "center",
  },
};

const Contact = props => {
  const {
    classes: { container, form },
  } = props;

  return (
    <div id="contact" className={container}>
      <MobileImage />
      <ContactForm />
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Contact);
