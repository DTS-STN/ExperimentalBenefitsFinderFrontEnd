import React, { useState, useEffect } from "react";

// react router imports
import { useParams } from "react-router-dom";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { benefitSelectorFactory } from "../redux/selectors/benefits";
import { NETWORK_FAILED_REASONS } from "../redux/actions";
import { useTranslation } from "react-i18next";

//component imports
import { ContentPage } from "../components/organisms/ContentPage";
import { getBenefit } from "../redux/dispatchers/benefits";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { NotFoundPage } from "./404";
import { Page } from "../components/organisms/Page";
import { Spinner } from "../components/atoms/Spinner";

export function BenefitPage() {
  const [triedFetch, setTriedFetch] = useState(false);

  // react router
  const { id } = useParams();

  // redux
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );

  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );

  const fetchBenefitsFailedReason = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedReason
  );

  const fetchBenefitsFailedObj = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedObj
  );

  const benefitSelector = benefitSelectorFactory(id);
  const benefitData = useSelector(benefitSelector);

  //redux dispatch
  const dispatch = useDispatch();

  // i18n
  const { t } = useTranslation();

  useEffect(() => {
    if (!triedFetch && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefit(id));
      setTriedFetch(true);
    }
  }, [triedFetch, isFetchingBenefits, fetchBenefitsFailed, id, dispatch]);

  if (fetchBenefitsFailed) {
    if (fetchBenefitsFailedReason === NETWORK_FAILED_REASONS.NOT_FOUND) {
      return <NotFoundPage />;
    }
  } else if (!benefitData) {
    return (
      <Page>
        <div className="w-full flex justify-center ">
          <Spinner size="large" />
        </div>
      </Page>
    );
  }
  return (
    <ContentPage
      content={
        benefitData.benefitContent
          ? benefitData.benefitContent
          : "Looks like there is no content yet"
      }
    />
  );
}
