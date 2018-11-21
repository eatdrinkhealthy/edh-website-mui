import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    // margin: "5px 0 5px 0",
  },
};

const NavBar = ({ classes: { container } }) => (
  <nav className={container}>
    <ul>
      <li>
        <a href="#home">HOME</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
      <li>
        <a href="#privacy">PRIVACY</a>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(NavBar);
