import { Users, Clock, Banknote } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Computer Science",
      description:
        "Learn programming, algorithms, AI, and software development with hands-on projects.",
      duration: "4 Years",
      price: "PKR 220,000 / year",
      teacher: "Dr. Ahmed Hassan",
      img: "https://www.shutterstock.com/image-photo/smart-young-students-studying-university-600nw-2102451307.jpg",
    },
    {
      title: "Business Administration",
      description:
        "Develop leadership, management, and entrepreneurial skills for the global business world.",
      duration: "3 Years",
      price: "PKR 195,000 / year",
      teacher: "Prof. Sana Malik",
      img: "https://www.shutterstock.com/image-photo/mba-master-business-administration-program-600nw-2434045027.jpg",
    },
    {
      title: "Data Science",
      description:
        "Master data analytics, machine learning, and big data tools to solve real-world problems.",
      duration: "2 Years",
      price: "PKR 245,000 / year",
      teacher: "Dr. Usman Khan",
      img: "https://www.kdnuggets.com/wp-content/uploads/awan_7_free_data_science_platform_beginners_1.png",
    },
    {
      title: "Psychology",
      description:
        "Understand human behavior, mental health, and cognitive processes with practical exposure.",
      duration: "3 Years",
      price: "PKR 165,000 / year",
      teacher: "Dr. Fatima Zahra",
      img: "https://thumbs.dreamstime.com/b/counseling-young-women-one-attendants-psychological-course-77250783.jpg",
    },
    {
      title: "Engineering",
      description:
        "Gain technical expertise in civil, mechanical, and electrical fields with industry projects.",
      duration: "4 Years",
      price: "PKR 285,000 / year",
      teacher: "Engr. Bilal Ahmed",
      img: "https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?s=612x612&w=0&k=20&c=pG8hCoqokgF-szNZJjDrqi-4gxYKRxth-RcyG2wI9u8=",
    },
    {
      title: "Graphic Design",
      description:
        "Unleash your creativity with design tools, branding strategies, and UI/UX design principles.",
      duration: "2 Years",
      price: "PKR 145,000 / year",
      teacher: "Ms. Ayesha Siddiqui",
      img: "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 text-center">
          Our Courses
        </h1>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Choose from a wide range of courses designed to equip you with the
          knowledge and skills to succeed. Our friendly teachers ensure a
          supportive learning environment.
        </p>

        {/* Courses Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700">
                  {course.title}
                </h2>
                <p className="mt-3 text-gray-600">{course.description}</p>

                {/* Course Info */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock size={16} aria-hidden /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-indigo-700">
                    <Banknote size={16} aria-hidden /> {course.price}
                  </span>
                </div>

                {/* Teacher Info */}
                <div className="mt-6 flex items-center gap-3">
                  <Users className="w-10 h-10 text-blue-600 bg-blue-100 rounded-full p-2" aria-hidden />
                  <div>
                    <p className="font-medium text-gray-800">{course.teacher}</p>
                    <p className="text-sm text-gray-500">Faculty (Pakistan)</p>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="mt-6 text-center">
                  <a
                    href="/admission"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
