import React, { useMemo, useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, BookOpen, GraduationCap, Mail } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/admission", label: "Admission", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Mail },
];

function pathToActiveIndex(pathname) {
  const idx = NAV_ITEMS.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );
  return idx >= 0 ? idx : 0;
}

export default function FloatingNav() {
  const { pathname } = useLocation();
  const active = useMemo(() => pathToActiveIndex(pathname), [pathname]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const updateIndicator = () => {
      const btn = btnRefs.current[active];
      const container = containerRef.current;
      if (!btn || !container) return;
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorStyle({
        width: btnRect.width,
        left: btnRect.left - containerRect.left,
      });
    };

    updateIndicator();
    const t = requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [active, pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:px-4"
    >
      <div className="pointer-events-auto w-full max-w-lg md:max-w-2xl">
        <div
          ref={containerRef}
          className="relative flex items-stretch justify-between gap-0.5 rounded-full border border-border/80 bg-white/95 px-1 py-1.5 shadow-xl shadow-black/10 ring-1 ring-black/[0.04] backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/95"
        >
          <motion.div
            aria-hidden
            className="absolute top-1 bottom-1 z-0 rounded-full bg-indigo-500/15 dark:bg-indigo-400/20"
            initial={false}
            animate={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />

          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === active;
            return (
              <Link
                key={item.href}
                to={item.href}
                ref={(el) => {
                  btnRefs.current[index] = el;
                }}
                className={`relative z-10 flex min-h-[44px] min-w-0 flex-1 flex-col items-center justify-center rounded-full px-1 py-1 text-xs font-medium transition-colors sm:px-2 ${
                  isActive
                    ? "text-indigo-700 dark:text-indigo-300"
                    : "text-muted-foreground hover:text-foreground dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                <Icon className="size-[22px] shrink-0" strokeWidth={isActive ? 2.25 : 2} aria-hidden />
                <span className="mt-0.5 max-w-[4.5rem] truncate sm:max-w-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
