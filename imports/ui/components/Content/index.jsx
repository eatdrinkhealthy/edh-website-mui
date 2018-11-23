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

const Content = props => {
  const {
    classes: { section },
  } = props;

  return (
    <div>
      <div id="home" className={section}>
        Home
      </div>
      <div id="contact" className={section}>
        Contact
      </div>
    </div>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Content);
