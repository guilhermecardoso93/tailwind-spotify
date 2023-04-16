'use client';

import { createContext } from 'react';

import Image from "next/image";
import {
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Play, House  } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <House size={32} weight="fill" /> Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              {" "}
              <Search /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              {" "}
              <Library /> Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-4">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 3
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 4
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 5
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 6
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 7
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 8
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 9
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              PlayList 10
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                src="/1.webp"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Kill This Love</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 flex items-center">
                <Play size={32} weight="fill" />
              </button>
            </a>
            <div className="bg-white/10 rounded">Playlist 4</div>
            <div className="bg-white/10 rounded">Playlist 4</div>
            <div className="bg-white/10 rounded">Playlist 4</div>
            <div className="bg-white/10 rounded">Playlist 4</div>
            <div className="bg-white/10 rounded">Playlist 4</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
