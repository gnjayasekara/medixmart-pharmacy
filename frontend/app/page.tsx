import Image from "next/image";
import { AutoplayCarousel } from "@/components/hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <AutoplayCarousel />
    </main>
  );
}
