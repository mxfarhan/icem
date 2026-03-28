import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const COLLEGE = {
  name: "Independent College of English and Microtrainings",
  short: "ICEM",
};

const CONTACT = {
  addressLines: [
    "Mali Khel Chashma",
    "Khyber Pakhtunkhwa, Pakistan",
  ],
  email: "info@icem.edu.pk",
  phone: "03334374852",
  phoneDisplay: "0333 437 4852",
  hours: "Mon–Sat · 9:00 am – 5:00 pm",
};

/** Same pin as hero / footer (32°25′43.2″N 71°18′22.9″E) */
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=32.4286667,71.3063611&z=17&hl=en&output=embed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="text-center text-3xl font-bold text-indigo-700 sm:text-4xl">
          Contact {COLLEGE.short}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          {COLLEGE.name} — reach us by form, phone, or email. We’re at{" "}
          <span className="font-medium text-gray-800">Mali Khel Chashma</span>.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium text-gray-700">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border p-3 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border p-3 focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border p-3 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Admission, courses, etc."
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-lg border p-3 focus:ring-2 focus:ring-indigo-500"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-start space-y-6 rounded-2xl bg-white p-6 shadow-md sm:p-8">
            <div className="flex gap-4">
              <MapPin className="h-8 w-8 shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="mt-1 text-gray-600">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  href="https://www.google.com/maps?q=32.4286667%2C71.3063611&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-8 w-8 shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="mt-1 block text-gray-700 hover:text-indigo-600"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-8 w-8 shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-1 block text-gray-700 hover:text-indigo-600"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-8 w-8 shrink-0 text-indigo-600" aria-hidden />
              <div>
                <h3 className="text-lg font-semibold">Office hours</h3>
                <p className="mt-1 text-gray-600">{CONTACT.hours}</p>
              </div>
            </div>

            <div className="mt-2 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                title="ICEM — Mali Khel Chashma on Google Maps"
                src={MAP_EMBED_SRC}
                width="100%"
                height="260"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[220px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
