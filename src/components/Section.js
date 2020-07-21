import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, render }) => (
  <div className="px-5 pb-16">
    <h1 className="text-center font-light text-xl mb-8">{title}</h1>
    {render()}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default Section;