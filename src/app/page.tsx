import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "./loading";

const HomeClient = dynamic(() => import("@/Components/HomeClient/HomeClient"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeClient />
    </Suspense>
  );
}
