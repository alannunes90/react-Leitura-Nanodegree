import React from "react";
import PropTypes from "prop-types";

export const Error404 = ({ location }) => (
  <div>
    <h3>
      Sem correspondência para <code>{location.pathname}</code>
    </h3>
  </div>
);

Error404.defaultProps = {
  location: {}
};

Error404.propTypes = {
  location: PropTypes.object.isRequired
};
