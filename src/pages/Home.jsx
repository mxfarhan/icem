import { BarChart3, Briefcase, Laptop } from "lucide-react";
import { Web3HeroAnimated } from "@/components/ui/animated-web3-landing-page";
import { Features } from "@/components/ui/features-2";

export default function Home() {
  return (
    <div className="pt-0">
      <Web3HeroAnimated />

      <Features />

      {/* Courses Section */}
      <section id="courses" className="bg-white py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Popular courses</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
            Practical tracks with clear outcomes.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {[
              {
                name: "Computer Science",
                icon: Laptop,
                fee: "PKR 220,000 / year",
                faculty: "Dr. Ahmed Hassan",
              },
              {
                name: "Business Administration",
                icon: Briefcase,
                fee: "PKR 195,000 / year",
                faculty: "Prof. Sana Malik",
              },
              {
                name: "Data Science",
                icon: BarChart3,
                fee: "PKR 245,000 / year",
                faculty: "Dr. Usman Khan",
              },
            ].map(({ name, icon: Icon, fee, faculty }) => (
              <div
                key={name}
                className="flex flex-row items-start gap-3 rounded-2xl border border-border/80 bg-muted/30 p-4 text-left sm:flex-col sm:items-center sm:text-center md:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 sm:mx-auto sm:h-11 sm:w-11">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-700">{fee}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Faculty: <span className="text-foreground">{faculty}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Call to Action */}
      <section
        id="admission"
        className="bg-gradient-to-r from-indigo-700 to-blue-600 px-4 py-12 text-center text-white sm:py-16"
      >
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">Admissions 2026</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-blue-100 sm:text-base">
          Apply online — quick steps on phone or desktop.
        </p>
        <a
          href="/admission"
          className="mt-6 inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-indigo-700 shadow-md active:bg-blue-50 sm:text-base"
        >
          Start admission
        </a>
      </section>
    </div>
  );
}
