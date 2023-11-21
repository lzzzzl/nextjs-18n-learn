import { useTranslation } from "@/app/i18n";
import { FooterBase } from "./footer-base";

interface FooterProps {
  lng: string;
}

const Footer = async ({
  lng
}: FooterProps) => {
  const { t } = await useTranslation(lng, 'footer')
  return <FooterBase t={t} lng={lng} />
};

export default Footer;
