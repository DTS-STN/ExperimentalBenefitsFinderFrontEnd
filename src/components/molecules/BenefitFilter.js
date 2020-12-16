import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { FilteredBenefitsCounter } from "../atoms/FilteredBenefitsCounter";

/**
 * This component displays three navigation buttons which filters out the result of benefits
 */
export function BenefitFilter(props) {
  const handleClick = (event) => props.onFilter(event.currentTarget.id);

  return (
    <div className="w-full py-2">
      <p className="text-text-gray-dk leading-none text-sm">{props.text}</p>
      <div className="w-full flex flex-col md:flex-row py-2">
        <ActionButton
          id="eligible"
          text={props.eligibleText}
          onClick={handleClick}
          invert={!props.isSelectedEligible}
          className={"bg-bg-gray-dk text-white hover:bg-black"}
        >
          <FilteredBenefitsCounter count={props.eligibleCount} />
        </ActionButton>
        <ActionButton
          id="help"
          text={props.helpText}
          onClick={handleClick}
          invert={!props.isSelectedHelp}
          className={"bg-bg-gray-dk text-white hover:bg-black"}
        >
          <FilteredBenefitsCounter count={props.helpCount} />
        </ActionButton>
        <ActionButton
          id="others"
          text={props.othersText}
          onClick={handleClick}
          invert={!props.isSelectedOthers}
          className={"bg-bg-gray-dk text-white hover:bg-black"}
        >
          <FilteredBenefitsCounter count={props.othersCount} />
        </ActionButton>
      </div>
    </div>
  );
}

BenefitFilter.propTypes = {
  /**
   * Text on top of the buttons
   */
  text: PropTypes.string,

  /**
   * Button text that displays Eligible benefits
   */
  eligibleText: PropTypes.string,

  /**
   * Displays the number of results of eligible benefits
   */
  eligibleCount: PropTypes.number,

  /**
   * Indicates eligible button in it's selected stage
   */
  isSelectedEligible: PropTypes.bool,

  /**
   * Indicates help button in it's selected stage
   */
  isSelectedHelp: PropTypes.bool,

  /**
   * Indicates others button in it's selected stage
   */
  isSelectedOthers: PropTypes.bool,

  /**
   * Button text that displays Potential help
   */
  helpText: PropTypes.string,

  /**
   * Displays the number of results of potential help
   */
  helpCount: PropTypes.number,

  /**
   * Other filter options that may be applied
   */
  othersText: PropTypes.string,

  /**
   * Display the number of results of other option that may applies
   */
  othersCount: PropTypes.number,

  /**
   * Handler when filter options clicked
   */
  onFilter: PropTypes.func,
};
