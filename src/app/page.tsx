import Image from "next/image";
import { MainLayout } from "@/components/templates/MainLayout";
import { DownloadButtons } from "@/components/molecules/DownloadButtons";
import { GradientText } from "@/components/atoms/GradientText";
import { FloatingImage } from "@/components/atoms/FloatingImage";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { ScreenshotCarousel } from "@/components/molecules/ScreenshotCarousel";
import icon from "@/assets/icon.png";
import screenshot1 from "@/assets/appScreenshots/1.png";
import screenshot2 from "@/assets/appScreenshots/2.png";
import screenshot3 from "@/assets/appScreenshots/3.png";
import screenshot4 from "@/assets/appScreenshots/4.png";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="min-h-[100dvh] flex flex-col items-center px-4">
        <div className="max-w-7xl mx-auto w-full mt-32 lg:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-center lg:text-left space-y-6">
              <div className="relative w-32 h-32 mx-auto lg:mx-0 rounded-xl overflow-hidden">
                <Image
                  src={icon}
                  alt="Challengers App Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Challenge Your <GradientText>Friends</GradientText>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                  Your new favorite app for creating and participating in exciting challenges with friends. 
                  Download now and start your journey to greatness!
                </p>
              </div>
              <DownloadButtons />
            </div>
            <div className="relative hidden lg:block h-[600px]">
              <ScreenshotCarousel 
                images={[screenshot1, screenshot2]} 
                className="absolute right-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
            Why Choose <GradientText>Challengers</GradientText>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Create Challenges"
              description="Design custom challenges for your friends and community. Set goals, timeframes, and rewards."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              }
            />
            <FeatureCard
              title="Track Progress"
              description="Monitor your progress and compete with friends in real-time leaderboards."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            <FeatureCard
              title="Win Rewards"
              description="Complete challenges to earn points, badges, and exclusive rewards."
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* App Preview Section */}
      <div className="py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
            Experience the <GradientText>Future</GradientText> of Challenges
          </h2>
          <div className="flex justify-center items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 via-[#ffcb30]/20 to-[#ff9f00]/20 blur-3xl -z-10" />
              <FloatingImage
                src={screenshot3}
                alt="Challengers App Screenshot"
                width={250}
                height={500}
                className="hidden md:block animate-float"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/20 via-[#ffcb30]/20 to-[#ff9f00]/20 blur-3xl -z-10" />
              <FloatingImage
                src={screenshot4}
                alt="Challengers App Screenshot"
                width={250}
                height={500}
                className="animate-float-delay-1"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
