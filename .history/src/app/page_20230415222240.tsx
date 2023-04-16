import Image from "next/image";
import {
  Search,
  Home as HomeIcon,
  Library,
  ChevronLeft,
  ChevronRight,
  Heart,
  Shuffle,
  SkipBack,
  ShuffleIcon,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume1,
  Maximize2,
} from "lucide-react";
import { Footer } from "@/componets/Footer";
import { Main } from "@/componets/Main";
import { Aside } from "@/componets/Aside";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
       <Main />
      </div>
      <Footer />
    </div>
  );
}
