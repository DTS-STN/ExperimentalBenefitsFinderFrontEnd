import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguageCreator, LANGUAGES } from "../../redux/actions";
import { ActionButton } from "../atoms/ActionButton";
import GitInfo from "react-git-info/macro";
import moment from "moment";

/**
 * page component complete with canada.ca header and footer
 */

export function Page(props) {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const gitInfo = GitInfo();

  let languageButtonHandler = () => {
    if (language === "en") {
      dispatch(changeLanguageCreator(LANGUAGES.FR));
    } else {
      dispatch(changeLanguageCreator(LANGUAGES.EN));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header
        onLanguageClick={languageButtonHandler}
        headerCanadaCaAltText={t("headerCanadaCaAltText")}
        language={language === "fr" ? "English" : "Français"}
        siteTitle={t("siteTitle")}
      />
      <div className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0">
        {props.children}
      </div>
      <div className="w-full flex flex-col flex-grow justify-end">
        <div className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0 mmflex sm:flex-col justify-between  ">
          <ActionButton
            className={"shadow-none hover:text-black"}
            id="report"
            icon="mt-1 mr-1 icon-play_arrow"
            text="Report a problem or mistake on this page"
            invert="true"
            // dataTestId="envelopIcon"
          />
          <ActionButton
            className={"shadow-none hover:text-black"}
            id="report"
            icon="mt-1 mr-1 icon-share"
            text="Share this page"
            invert="true"
            // dataTestId="envelopIcon"
          />
        </div>
        <div className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0 md:mt-6  md:mb-2">
          <p> Date Modified: {moment(gitInfo.commit.date).format("L")}</p>
        </div>
        <Footer
          contactLink={t("contactLink")}
          contactText={t("contactText")}
          termsAndConditionsLink={t("termsAndConditionsLink")}
          termsAndConditionsText={t("termsAndConditionsText")}
          privacyLink={t("privacyLink")}
          privacyText={t("privacyText")}
          footerCanadaCaAltText={t("footerCanadaCaAltText")}
          links={[
            {
              link: t("departmentAndAgenciesLink"),
              linkText: t("departmentAndAgenciesText"),
            },
            {
              link: t("publicServiceAndMilitaryLink"),
              linkText: t("publicServiceAndMilitaryText"),
            },
            {
              link: t("newsLink"),
              linkText: t("newsText"),
            },
            {
              link: t("treatiesLawsAndRegulationLink"),
              linkText: t("treatiesLawsAndRegulationText"),
            },
            {
              link: t("governmentWideReportingLink"),
              linkText: t("governmentWideReportingText"),
            },
            {
              link: t("howGovernmentWorksLink"),
              linkText: t("howGovernmentWorksText"),
            },
          ]}
        />
      </div>
    </div>
  );
}

Page.propTypes = {
  /**
   * content that will go into the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
