import IntroPage from "@/app/ui/introPage";
import Mainsection from "@/app/ui/Mainsection";
import CommunityGallery from "@/app/ui/communityGallery";

export default function Home() {
  return (
    <div className="flex border flex-col min-h-screen items-center justify-center">
      <IntroPage />
      <Mainsection />
      <CommunityGallery />
      <div
        className="footer mt-40 h-30 w-full "
        style={{
          backgroundImage: "url(/ripped-paper-2048x100.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <footer className="w-full  px-6 py-10 text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Community Gallery
            </h2>
            <p className="mt-2 text-sm max-w-sm">
              A space where moments, creativity, and people come together.
            </p>
          </div>

          <div className="text-sm">
            © {new Date().getFullYear()} Community Gallery <br />
            Designed & developed with care.
          </div>
        </div>
      </footer>
    </div>
  );
}
