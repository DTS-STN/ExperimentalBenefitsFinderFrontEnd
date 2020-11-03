import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component will add a start again button
 */

export function StartAgainButton(props) {
  const handleClick = (event) => props.onClick(event.currentTarget.id);

  return (
    <div className="md:flex">
      <span className={props.icon} />
      <ActionButton
        id="start"
        text={props.text}
        onClick={handleClick}
        img="icon-loop2"
      ></ActionButton>
    </div>
  );
}

StartAgainButton.propTypes = {
  /**
   * Text on top of the buttons
   */
  text: PropTypes.string,

  onClick: PropTypes.func,

  icon: PropTypes.string,
};
