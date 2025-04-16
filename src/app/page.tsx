import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/Components/Hero/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/Components/Grid/Grid"), { ssr: false });
export default function Home() {
  return (
      <div className="w-full h-full text-white">
        <Hero/>
        <Grid/>
      </div>
  );
}
