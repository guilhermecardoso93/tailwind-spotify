import { Heart, ShuffleIcon, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume1, Maximize2 } from "lucide-react";
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="./3.jpg" alt="capa de album" width={56} height={56} />
        <div className="flex flex-col gap-2">
          <strong className="font-normal">PLAY WITH FIRE</strong>
          <span className="text-xs text-zinc-400">BLACKPINK</span>
        </div>
        <button className="flex items-center ml-4">
          <Heart className="text-zinc-500 hover:text-green-400" size={20} />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-6 items-center">
          <ShuffleIcon
            className="text-zinc-500 hover:text-green-400"
            size={20}
          />
          <SkipBack className="text-zinc-500 hover:text-green-400" size={20} />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-zinc-500 hover:bg-green-400">
            <Play size={20} className="text-zinc-500 hover:text-zinc-200" />
          </button>

          <SkipForward
            className="text-zinc-500 hover:text-green-400"
            size={20}
          />
          <Repeat className="text-zinc-500 hover:text-green-400" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-xm">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 ">
            <div className="h-1 rounded-full w-40 bg-zinc-200 "></div>
          </div>
          <span className="text-zinc-500 text-xm">3:00</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} className="hover:text-green-400" />
        <LayoutList size={20} className="hover:text-green-400" />
        <Laptop2 size={20} className="hover:text-green-400" />
        <div className="flex items-center gap-4">
          <Volume1 size={20} className="hover:text-green-400" />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200 "></div>
          </div>
        </div>
        <Maximize2 size={18} className="hover:text-green-400" />
      </div>
    </footer>
  );
}
