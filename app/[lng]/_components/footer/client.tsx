"use client";

import { useTranslation } from "@/app/i18n/client";
import { FooterBase } from "./footer-base";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
