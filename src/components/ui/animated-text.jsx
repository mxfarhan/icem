import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedText = React.forwardRef(
  (
    {
      text,
      duration = 0.5,
      delay = 0.1,
      replay = true,
      className,
      textClassName,
      underlineClassName,
      as: _Component = "h1",
      underlineGradient = "from-blue-500 via-purple-500 to-pink-500",
      underlineHeight = "h-1",
      underlineOffset = "-bottom-2",
      ...props
    },
    ref
  ) => {
    const lines = text.includes("\n")
      ? text
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
      : [text];
    const letters = lines.flatMap((line) => Array.from(line));

    const container = {
      hidden: {
        opacity: 0,
      },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration,
          delayChildren: i * delay,
        },
      }),
    };

    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    };

    const lineVariants = {
      hidden: {
        width: "0%",
        left: "50%",
      },
      visible: {
        width: "100%",
        left: "0%",
        transition: {
          delay: letters.length * delay,
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", className)}
        {...props}
      >
        <div className="relative w-full max-w-5xl px-1">
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
              rowGap: "0.12em",
            }}
            variants={container}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className={cn("text-4xl font-bold text-center text-white", textClassName)}
          >
            {lines.flatMap((line, lineIdx) => [
              ...Array.from(line).map((letter, i) => (
                <motion.span key={`${lineIdx}-${i}`} variants={child}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              )),
              lineIdx < lines.length - 1 ? (
                <span
                  key={`break-${lineIdx}`}
                  className="h-0 w-full basis-full overflow-hidden"
                  aria-hidden
                />
              ) : null,
            ])}
          </motion.div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className={cn(
              "absolute",
              underlineHeight,
              underlineOffset,
              "bg-gradient-to-r",
              underlineGradient,
              underlineClassName
            )}
          />
        </div>
      </div>
    );
  }
);
AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
