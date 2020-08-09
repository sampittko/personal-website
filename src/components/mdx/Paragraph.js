import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ children }) => (
  <p className="mb-4 px-0 sm:px-12 text-justify">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
