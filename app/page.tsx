import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 px-4">
      <Intro />
    </main>
  );
}
