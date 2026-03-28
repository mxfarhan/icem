import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";

/** Mali Khel Chashma — 32°25'43.2"N 71°18'22.9"E */
const CAMPUS_MAP_URL =
  "https://www.google.com/maps?q=32.4286667%2C71.3063611&z=17";

const HERO_IMAGE =
  "https://img.freepik.com/free-photo/low-angle-cheerful-team-students-passed-test-by-preparing-all-together_496169-2336.jpg";

export function Web3HeroAnimated() {
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white">
        {/* Photo background */}
        <div aria-hidden className="absolute inset-0 -z-40">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover object-center brightness-[1.06] contrast-[1.03] saturate-[1.05]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/55" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Luminous gradients (blend over photo) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: [
              "radial-gradient(80% 55% at 50% 52%, rgba(252,166,154,0.22) 0%, rgba(214,76,82,0.22) 27%, rgba(61,36,47,0.18) 47%, rgba(39,38,67,0.22) 60%, rgba(8,8,12,0.45) 78%, rgba(0,0,0,0.65) 88%)",
              "radial-gradient(85% 60% at 14% 0%, rgba(255,193,171,0.28) 0%, rgba(233,109,99,0.28) 30%, rgba(48,24,28,0) 64%)",
              "radial-gradient(70% 50% at 86% 22%, rgba(88,112,255,0.18) 0%, rgba(16,18,28,0) 55%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0) 42%)",
            ].join(","),
            backgroundColor: "transparent",
          }}
        />

        <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_55%,rgba(0,0,0,0.45))]" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-[0.14]"
          style={{
            backgroundImage: [
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px)",
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px)",
              "repeating-radial-gradient(80% 55% at 50% 52%, rgba(255,255,255,0.06) 0 1px, transparent 1px 120px)",
            ].join(","),
            backgroundBlendMode: "screen",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-16 md:py-20 lg:py-24">
          <div className={`mx-auto text-center ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}>
            <a
              href={CAMPUS_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/15 hover:ring-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              aria-label="Open Mali Khel Chashma on Google Maps"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
              Mali Khel Chashma
            </a>
            <h1 className="sr-only">
              Independent College of English and Microtrainings
            </h1>
            <div className="mt-6 w-full" aria-hidden>
              <AnimatedText
                text={"Independent College of English\nand Microtrainings"}
                replay={isMounted}
                duration={0.04}
                delay={0.04}
                className="!gap-0"
                textClassName="text-balance text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
                underlineGradient="from-cyan-400 via-violet-400 to-rose-400"
                underlineHeight="h-1 sm:h-1.5"
                underlineOffset="-bottom-2 sm:-bottom-3"
                underlineClassName="rounded-full opacity-90"
              />
            </div>
            <p
              style={{ animationDelay: "300ms" }}
              className={`mx-auto mt-5 max-w-2xl text-balance text-white/85 md:text-lg ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
            >
              Empowering learners with quality English education and professional microtrainings—where ambition meets opportunity.
            </p>
            <div
              style={{ animationDelay: "400ms" }}
              className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
            >
              <a
                href="#admission"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow transition hover:bg-white/90"
              >
                Apply Now
              </a>
              <a
                href="/courses"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/95 backdrop-blur hover:border-white/45"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-white/50 via-rose-100/40 to-transparent"
          style={{ animation: "subtlePulse 6s ease-in-out infinite" }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(54vh,420px)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
            {pillars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-black transition-all duration-1000 ease-in-out"
                style={{
                  height: isMounted ? `${h}%` : "0%",
                  transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
