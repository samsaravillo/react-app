import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItem from "./listItem";

const List = ({ create, read, update, destroy }) => {
  const [lastClickedButton, setLastClickedButton] = useState("");

  return (
    <div>
      <h1>The last clicked button is {lastClickedButton} </h1>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              setLastClickedButton("Create");
              props.createSomething();
            }}
            className="my-button"
          >
            Create
          </button>
        </li> */}
        <ListItem
          title="Create"
          action={create}
          setClicked={setLastClickedButton}
        />
        <ListItem
          title="Read"
          action={read}
          setClicked={setLastClickedButton}
        />
        <ListItem
          title="Update"
          action={update}
          setClicked={setLastClickedButton}
        />
        <ListItem
          title="Destroy"
          action={destroy}
          setClicked={setLastClickedButton}
        />
      </ul>
    </div>
  );
};

List.propTypes = {
  create: PropTypes.func,
  read: PropTypes.func,
  update: PropTypes.func,
  destroy: PropTypes.func,
};

export default List;
