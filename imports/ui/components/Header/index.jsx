/* eslint-disable arrow-parens, object-curly-newline */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import NavBar from "./NavBar";
import IconButtons from "./IconButtons";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `8px solid ${theme.palette.primary.main}`,
    boxShadow: "none",
  },
  toolBar: {
    backgroundColor: "white",
  },
});

// App component - represents the whole app
const Header = props => {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Logo />
            <NavBar />
            <IconButtons />
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Header);
