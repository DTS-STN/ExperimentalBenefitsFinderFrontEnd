import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguageCreator, LANGUAGES } from "../../redux/actions";

/**
 * page component complete with canada.ca header and footer
 */

export function Page(props) {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
      <div className="w-full md:w-2/3 m-0  md:mr-auto md:ml-auto p-2 md:p-0 flex justify-center items-center">
        {props.children}
      </div>
      // TODO: align footer end
      <div className="w-full place-self-end">
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