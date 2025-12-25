import IntroPage from "@/app/ui/introPage";
import Mainsection from "@/app/ui/Mainsection";
import CommunityGallery from "@/app/ui/communityGallery";

export default function Home() {
  return (
    <div className="flex border flex-col min-h-screen items-center justify-center">
      <IntroPage />
      <Mainsection />
      <CommunityGallery />
    </div>
  );
}
