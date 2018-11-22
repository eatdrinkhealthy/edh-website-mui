import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    // margin: "5px 0 5px 0",
  },
  selected: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
});

// TODO: to set an anchor link active, could check location.hash
// if equal, set Contact to active
// Note, may need to use Link instead of NavLink to do so
const NavBar = ({ classes: { container, selected } }) => (
  <nav className={container}>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName={selected}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/#contact" activeClassName={selected}>
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/privacy-policy" activeClassName={selected}>
          PRIVACY
        </NavLink>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(NavBar);
