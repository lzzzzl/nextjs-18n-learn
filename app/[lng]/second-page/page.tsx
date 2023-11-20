import { useTranslation } from "@/app/i18n";
import Link from "next/link";

type SecondPageParams = {
  lng: string;
};

const SecondPage = async ({ params }: { params: { lng: string } }) => {
  const { t } = await useTranslation(params.lng, 'second-page')
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}`}>{t("back-to-home")}</Link>
    </>
  );
};

export default SecondPage;
