import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  form: {
    border: "1px dashed green",
    textAlign: "center",
  },
};

const ContactForm = props => {
  const {
    classes: { form },
  } = props;

  return <div className={form}>Contact Form</div>;
};

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(ContactForm);
