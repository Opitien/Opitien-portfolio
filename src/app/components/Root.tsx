import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { MusicPlayer } from "./MusicPlayer";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] flex flex-col">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      <div className="scanlines"></div>
      
      <Navbar />
      <MusicPlayer />
      
      <main className="pt-20 flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}