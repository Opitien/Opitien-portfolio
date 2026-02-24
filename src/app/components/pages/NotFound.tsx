import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 bg-[#F5F3ED]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="retro-heading text-6xl md:text-8xl text-[#2C2C2C] tracking-tighter leading-none">
          Houston<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D17654] to-[#5D9B99]">
            We Have A Problem
          </span>
        </h1>
        <p className="font-mono text-lg text-[#2C2C2C]/70">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="retro-button inline-flex items-center gap-2">
          <ArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;