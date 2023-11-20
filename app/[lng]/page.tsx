import Link from "next/link";

type PageParams = {
  lng: string;
};

const Page = ({ lng }: PageParams) => {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>second page</Link>
    </>
  );
};

export default Page;
