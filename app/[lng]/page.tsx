import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Footer from "./_components/footer";


const Page = async ({ 
  params 
}: { 
  params: { lng: string }; 
}) => {
  const { t } = await useTranslation(params.lng, "translation");
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${params.lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <Footer lng={params.lng}/>
    </>
  );
};

export default Page;
