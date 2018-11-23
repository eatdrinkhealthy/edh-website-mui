import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const pathAndHash = (match, location, toHash) => {
  if (!match) {
    return false;
  }

  return match.url === location.pathname && toHash === location.hash;
};

const styles = theme => ({
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
const NavBar = ({ classes: { selected } }) => (
  <nav className="header-container header-middle">
    <NavLink
      className="nav-link"
      exact
      to="/"
      activeClassName={selected}
      isActive={(m, l) => pathAndHash(m, l, "")}
    >
      HOME
    </NavLink>
    <NavLink
      className="nav-link"
      exact
      to={{ pathname: "/", hash: "#contact" }}
      activeClassName={selected}
      isActive={(m, l) => pathAndHash(m, l, "#contact")}
    >
      CONTACT
    </NavLink>
    <NavLink
      className="nav-link"
      exact
      to="/privacy-policy"
      activeClassName={selected}
      isActive={(m, l) => pathAndHash(m, l, "")}
    >
      PRIVACY
    </NavLink>
  </nav>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(NavBar);
