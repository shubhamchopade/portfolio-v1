import {
  AlignStartHorizontal,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  ListStartIcon,
  LucideStopCircle,
  Play,
  RotateCcw,
  SendIcon,
  Square,
  StopCircle,
  TwitterIcon,
} from "lucide-react";

export const TimerIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="10" x2="14" y1="2" y2="2"></line>
    <line x1="12" x2="15" y1="14" y2="11"></line>
    <circle cx="12" cy="14" r="8"></circle>
  </svg>
);

export const Icons = {
  timer: TimerIcon,
  start: Play,
  stop: Square,
  reset: RotateCcw,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
  download: DownloadIcon,
  send: SendIcon,
};
