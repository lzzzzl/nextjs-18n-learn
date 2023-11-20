import Link from "next/link";

type SecondPageParams = {
  lng: string;
}

const SecondPage = ({lng}: SecondPageParams) => {
  return (
    <>
      <h1>
        Hi from second page!
      </h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  );
}
 
export default SecondPage;