import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import WizardModel from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <WizardModel />
        </RenderModel>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          
        </div>
      </div>
    </main>
  );
}
