import { Aside } from "@/app/components/Aside";
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
