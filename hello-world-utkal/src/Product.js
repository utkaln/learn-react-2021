import React from "react";
import PropTypes from "prop-types";
import ghLogoImg from "./images/github-icon.png";
// from url - https://api.github.com/users/utkaln/repos
const Product = ({ name, html_url, language, updated_at }) => {
  return (
    <article className="product">
      <h4>{name}</h4>
      <img src={ghLogoImg} alt={name} />
      <h5>
        {html_url}, {language}, {updated_at}
      </h5>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
};

Product.defaultProps = {
  name: "Name Not Found",
  html_url: "URL Not Found",
  language: "Language Not Found",
  updated_at: "Updated Date not Found",
};

export default Product;
