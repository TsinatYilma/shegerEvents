import IntroPage from "@/app/ui/introPage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <IntroPage />
      <div className="min-h-screen">
        <p className="text-7xl">whats happening</p>
      </div>
    </div>
  );
}
