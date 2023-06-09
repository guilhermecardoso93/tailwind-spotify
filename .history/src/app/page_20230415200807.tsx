import { Home as HomeIcon, Search, Library } from "lucide-react";
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

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className='text-sm text-zinc-400'>PlayList 1</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 2</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 3</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 4</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 5</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 6</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 7</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 8</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 9</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 10</a>
            <a href="" className='text-sm text-zinc-400'>PlayList 11</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
