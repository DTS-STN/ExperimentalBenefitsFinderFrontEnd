import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component will add a start again button
 */

export function StartAgainButton(props) {
  const handleClick = (event) => props.onClick(event.currentTarget.id);

  return (
    <ActionButton
      id="start"
      onClick={handleClick}
      icon={props.icon}
      notRound={props.notRound}
      text={props.buttonText}
    ></ActionButton>
  );
}

StartAgainButton.propTypes = {
  /**
   * sm round to the button
   */
  notRound: PropTypes.bool,
  /**
   * overiding class css
   */
  buttonText: PropTypes.string,
  /**
   * Event Handler when button clicked
   */
  onClick: PropTypes.func,
  /**
   * adding icon with icomoon inside the button
   */
  icon: PropTypes.element,
};
