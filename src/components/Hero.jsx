import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://blog-1rng.onrender.com/mycourse");
        setCourseCount(response.data.length);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="relative overflow-hidden bg-indigo-50">
      <div className="container mx-auto px-6 sm:px-10 md:px-20 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="inline-block text-sm font-medium bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full">
                Learn at your own pace
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Empower your <span className="text-indigo-700">mind</span> with{" "}
                <span className="text-indigo-700">knowledge</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Access expert-led courses anytime, anywhere — start building skills that boost your career and passion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="rounded-full px-6 py-3 bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition duration-300 text-center"
              >
                Get Started
              </Link>
              
            </div>

            {/* Course Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-indigo-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{courseCount}+</p>
                <p className="text-sm text-indigo-600">Courses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">Coming</p>
                <p className="text-sm text-indigo-600">Students</p>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-gray-900">Coming</p>
                <p className="text-sm text-indigo-600">Instructors</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              <div className="aspect-square md:aspect-[4/3] relative py-6 sm:py-10">
                <img
                  src="./hero.jpg"
                  alt="Students learning online"
                  className="object-contain drop-shadow-xl w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-indigo-100 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
