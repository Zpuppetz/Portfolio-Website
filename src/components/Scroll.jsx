import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span className="text-5xl font-bold font-sans bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Keshav Gupta  <br />
            <span className="text-3xl font-normal font-serif bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Full-stack Developer
            </span>
          </span>
        }
        badge={
          <a href="https://www.linkedin.com/in/keshav-gupta-bb5495252/" target="_blank">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false} />
    </div>
  );
}

//linkedin badge svg
const Badge = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx="12" cy="12" r="11" fill="#0A66C2" stroke="#0A66C2" strokeWidth="1" />
      <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="white" />
      <path d="M7 10H9V16H7V10Z" fill="white" />
      <path d="M10 10H12V10.98C12.33 10.35 13.26 9.88 14.65 9.88C17.37 9.88 18 11.54 18 14.05V16H16V14.26C16 13.05 15.65 12.23 14.65 12.23C13.85 12.23 13.35 12.77 13.17 13.29C13.09 13.5 13 13.78 13 14.06V16H11V10Z" fill="white" />
    </svg>
  );
};

