import { Link } from "react-router-dom";

const COLLEGE_NAME = "Independent College of English and Microtrainings";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-white/90 shadow-sm backdrop-blur-md dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label={`${COLLEGE_NAME} — Home`}
        >
          <img
            src="images/univ.png"
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-border sm:h-10 sm:w-10"
          />
          <span className="truncate text-base font-semibold text-indigo-700 sm:text-lg md:text-xl dark:text-indigo-400">
            <span className="hidden sm:inline">{COLLEGE_NAME}</span>
            <span className="sm:hidden">ICEM</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
