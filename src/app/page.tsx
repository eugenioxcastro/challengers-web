import Image from "next/image";
import { MainLayout } from "@/components/templates/MainLayout";
import { DownloadButtons } from "@/components/molecules/DownloadButtons";
import icon from "@/assets/icon.png";
export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center space-y-8">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-xl overflow-hidden">
            <Image
              src={icon}
              alt="Challengers App Icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-center rounded-xl p-4 border border-white">
          <h1 className="text-5xl font-bold text-white mb-4">
            Challengers
          </h1>
          
          <p className="text-xl text-white max-w-md mx-auto mb-4">
            Your new favorite app for challenges with friends. Download now and start your journey!
          </p>
          </div>

          <DownloadButtons />
        </div>
      </div>
    </MainLayout>
  );
}
