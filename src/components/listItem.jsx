import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ action, title, setClicked }) => {
  return (
    <li>
      <button
        onClick={() => {
          setClicked(title);
          action();
        }}
        className="my-button"
      >
        {title}
      </button>
    </li>
  );
};

ListItem.propTypes = {
  action: PropTypes.func,
  setClicked: PropTypes.func,
  title: PropTypes.string,
};

export default ListItem;
