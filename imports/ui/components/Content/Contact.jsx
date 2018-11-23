import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  section: {
    height: "400px",
    border: "2px solid brown",
    margin: "5px",
    padding: "5px",
  },
};

const Contact = props => {
  const {
    classes: { section },
  } = props;

  return (
    <div id="contact" className={section}>
      Contact
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Contact);
