import { Link } from "react-router-dom";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const COLLEGE = {
  name: "Independent College of English and Microtrainings",
  short: "ICEM",
  tagline:
    "English language excellence and career-focused microtrainings in a supportive campus at Mali Khel Chashma.",
  logo: "images/univ.png",
};

const MAP_URL =
  "https://www.google.com/maps?q=32.4286667%2C71.3063611&z=17";

const CONTACT = {
  address: "Mali Khel Chashma, Khyber Pakhtunkhwa, Pakistan",
  email: "info@icem.edu.pk",
  phone: "03334374852",
  phoneDisplay: "0333 437 4852",
  hours: "Mon–Sat · 9:00 am – 5:00 pm",
};

const DEVELOPER = {
  name: "Hani",
  phone: "03334374852",
  phoneDisplay: "0333 437 4852",
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
];

const exploreLinks = [
  { text: "About the college", to: "/about" },
  { text: "Courses & programs", to: "/courses" },
  { text: "Admission", to: "/admission" },
  { text: "Contact & visit", to: "/contact" },
];

const programLinks = [
  { text: "English language programs", to: "/courses" },
  { text: "Microtrainings & skills", to: "/courses" },
  { text: "Apply online", to: "/admission" },
  { text: "Student support", to: "/contact" },
];

const resourceLinks = [
  { text: "Home", to: "/" },
  { text: "Privacy & conduct", to: "/about" },
];

export default function Footer4Col() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 w-full rounded-t-2xl border-t border-border/40 bg-secondary pb-24 pt-12 text-secondary-foreground md:mt-16 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="text-center sm:text-left">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 sm:justify-start"
            >
              <img
                src={COLLEGE.logo}
                alt=""
                className="h-9 w-9 rounded-full object-cover ring-1 ring-border"
              />
              <span className="text-xl font-semibold text-foreground">
                {COLLEGE.short}
              </span>
            </Link>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:mx-0">
              {COLLEGE.tagline}
            </p>
            <ul className="mt-6 flex justify-center gap-5 sm:justify-start sm:gap-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition hover:opacity-80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-base font-medium text-foreground">Explore</p>
              <ul className="mt-5 space-y-3 text-sm">
                {exploreLinks.map(({ text, to }) => (
                  <li key={text}>
                    <Link
                      to={to}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base font-medium text-foreground">Programs</p>
              <ul className="mt-5 space-y-3 text-sm">
                {programLinks.map(({ text, to }) => (
                  <li key={text}>
                    <Link
                      to={to}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <p className="text-base font-medium text-foreground">Location & contact</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-center gap-2 sm:justify-start"
                  >
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <address className="not-italic text-muted-foreground transition hover:text-foreground">
                      {CONTACT.address}
                    </address>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center justify-center gap-2 sm:justify-start"
                  >
                    <Mail className="size-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-muted-foreground">{CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center justify-center gap-2 sm:justify-start"
                  >
                    <Phone className="size-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-muted-foreground">{CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li className="flex items-start justify-center gap-2 sm:justify-start">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{CONTACT.hours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>
              © {year}{" "}
              <span className="font-medium text-foreground">{COLLEGE.name}</span>.
              All rights reserved.
            </p>
            <div className="flex flex-col gap-1 sm:items-end">
              <p>
                Developed by{" "}
                <span className="font-medium text-foreground">{DEVELOPER.name}</span>
                {" · "}
                <a
                  href={`tel:${DEVELOPER.phone}`}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  {DEVELOPER.phoneDisplay}
                </a>
              </p>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:justify-end">
                {resourceLinks.map(({ text, to }) => (
                  <li key={text}>
                    <Link
                      to={to}
                      className="transition hover:text-foreground"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
