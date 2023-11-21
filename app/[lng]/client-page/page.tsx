"use client";

import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "../_components/footer/client";

export default function Page({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "use-client");
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Footer lng={lng} />
    </>
  );
}
