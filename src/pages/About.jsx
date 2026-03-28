import { Users, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-700">About EduVerse</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          EduVerse University is committed to providing high-quality education with a
          global perspective. Our mission is to empower students with knowledge,
          skills, and values to thrive in a competitive world.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-indigo-700">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To provide transformative education that nurtures innovation, research,
            and leadership, preparing students to contribute positively to society.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-indigo-700">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            To be a globally recognized institution known for academic excellence,
            inclusivity, and shaping the future leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Users className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">10,000+</h3>
            <p className="mt-2">Students Enrolled</p>
          </div>
          <div>
            <Award className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">50+</h3>
            <p className="mt-2">Awards & Recognitions</p>
          </div>
          <div>
            <BookOpen className="w-12 h-12 mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">100+</h3>
            <p className="mt-2">Programs Offered</p>
          </div>
        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Meet Our Faculty
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            {
              name: "Dr. Ahmed Hassan",
              role: "Professor of Computer Science",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Prof. Sana Malik",
              role: "Dean of Business Studies",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            },
            {
              name: "Dr. Usman Khan",
              role: "Head of Data Science",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            },
          ].map((faculty, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{faculty.name}</h3>
              <p className="text-gray-600">{faculty.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
