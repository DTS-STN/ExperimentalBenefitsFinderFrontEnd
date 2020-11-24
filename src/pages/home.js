import React from "react";
import { useTranslation } from "react-i18next";
import { PageDescription } from "../components/atoms/PageDescription";
import { Title } from "../components/atoms/Title";
import { LoadingCard } from "../components/molecules/LoadingCard";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      <div className="m-auto">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
      </div>
      <div className="text-2xl m-auto py-6 leading-none">
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>
      </div>
      <LoadingCard />
    </div>
  );
}
