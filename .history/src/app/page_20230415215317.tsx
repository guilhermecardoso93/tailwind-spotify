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
} from "lucide-react";

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
              <HomeIcon /> Home
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
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/20 transition-colors"
            >
              <Image
                src="/1.webp"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Kill This Love</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/20 transition-colors"
            >
              <Image
                src="/3.jpg"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Square Up</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/20 transition-colors"
            >
              <Image
                src="/2.jpg"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Born Pink</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/5 transition-colors"
            >
              <Image
                src="/4.jpg"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Square Two</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/20 transition-colors"
            >
              <Image
                src="/5.jpg"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>Square One</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded overflow-hidden flex items-center gap-4 group hover:bg-white/20 transition-colors"
            >
              <Image
                src="/6.png"
                alt="capa de album"
                width={104}
                height={104}
              />
              <strong>The ALbum</strong>
              <button className="w-12 h-12 rounded-full flex items-center pl-2 ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                <Image
                  src="/play-fill.svg"
                  alt="botao de play"
                  width={32}
                  height={32}
                />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for You</h2>

          <div className="grid grid-cols-5 gap-2 mt-4">
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play1.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play2.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play3.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play4.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play5.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play6.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play7.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play8.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play9.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
            <a className="bg-white/3 p-4 rounded-md flex flex-col gap-2 justify-center items-start hover:bg-white/10">
              <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                  src="/play10.jpg"
                  alt="capa de album"
                  width={240}
                  height={120}
                  className="rounded"
                />
                <strong className="font-semibold">Daily Mix</strong>
                <span className="text-sm text-zinc-500">
                  Little Mix, Pussycat Dolls, Beyoncé, Rihanna ....
                </span>
              </div>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/3.jpg" alt="capa de album" width={56} height={56} />
          <div className="flex flex-col gap-2">
            <strong className="font-normal">PLAY WITH FIRE</strong>
            <span className="text-xs text-zinc-400">BLACKPINK</span>
          </div>
          <button className="flex items-center ml-4 text-sm">
            <Heart />
          </button>
        </div>
        <div>
          <div className="flex gap-6 items-center">
            <ShuffleIcon className="text-zinc-500" size={20} />
            <SkipBack className="text-zinc-500" size={20} />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-zinc-500">
              <Play size={20} />
            </button>

            <SkipForward className="text-zinc-500" size={20} />
            <Repeat className="text-zinc-500" size={20} />
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-xm">0:31</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
