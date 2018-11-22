import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const IconButtons = () => (
  <div className="icon-buttons">
    <a href="mailto:info@eatdrinkhealthy.co">
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-envelope fa-stack-1x fa-inverse" />
      </span>
    </a>
    <a
      href="https://www.linkedin.com/company/16173480/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
      </span>
    </a>
  </div>
);

export default IconButtons;
