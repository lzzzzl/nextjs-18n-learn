import Link from "next/link";
import { useTranslation } from "@/app/i18n";

type PageParams = {
  lng: string;
};

const Page = async ({ params }: { params: { lng: string } }) => {
  const { t } = await useTranslation(params.lng, "translation");
  console.log(t);
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${params.lng}/second-page`}>
        {t('to-second-page')}
      </Link>
    </>
  );
};

export default Page;
