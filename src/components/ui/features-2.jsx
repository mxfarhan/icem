import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Languages, Layers, School } from "lucide-react";

/** Template baseline: icon 24px, inner 48px, outer 144px — scaled +25%. */
const COLLEGE_SHORT = "Independent College of English and Microtrainings";

const FEATURES = [
  {
    icon: Languages,
    title: "English programs",
    blurb: "Fluency, writing & communication for study and work.",
  },
  {
    icon: Layers,
    title: "Skill microtrainings",
    blurb: "Short modules—learn fast, apply on the job.",
  },
  {
    icon: School,
    title: "Campus & faculty",
    blurb: "Experienced teachers, modern spaces, supportive community.",
  },
];

function CardDecorator({ children }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto size-[180px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:30px_30px] opacity-10" />
      <div className="absolute inset-0 m-auto flex size-[60px] items-center justify-center border-l border-t border-border bg-background">
        {children}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="about"
      className="border-t border-border/40 bg-gradient-to-b from-slate-50/80 to-white py-16 md:py-24 lg:py-32"
    >
      <div className="@container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for learners at {COLLEGE_SHORT}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            Mali Khel Chashma — English, microtrainings & a community focused on your goals.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-6 *:text-center sm:max-w-none md:mt-16 md:grid-cols-3 md:gap-8 @min-4xl:max-w-full @min-4xl:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, blurb }) => (
            <Card
              key={title}
              className="group border-0 bg-muted/80 shadow-none ring-1 ring-border/50 transition-shadow hover:shadow-sm md:bg-muted"
            >
              <CardHeader className="pb-3">
                <CardDecorator>
                  <Icon
                    className="size-[30px] shrink-0 text-indigo-600"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </CardDecorator>
                <h3 className="mt-6 font-medium text-foreground">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
