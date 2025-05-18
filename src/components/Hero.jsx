import { Link } from "react-router-dom";

const Hero = () => {
    return (
       <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 text-white">


            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <div className="space-y-2">
                            <p className="inline-block text-sm font-medium bg-white/10 text-white px-2 py-1.5 rounded-full">
                                Learn at your own pace
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl -m-1 font-bold tracking-tight">
                                Empower your <span className="text-yellow-300">mind</span> with <span className="text-yellow-300">knowledge</span>
                            </h1>
                        </div>

                        <p className="text-lg text-white/90 max-w-xl mx-auto lg:mx-0">
                            Access thousands of expert-led courses anytime, anywhere — start building skills that boost your career and passion.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/courses"
                                className="rounded-full px-8 py-3 bg-white text-indigo-700 font-semibold shadow-md hover:bg-gray-100 transition"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/30">
                            <div>
                                <p className="text-2xl font-bold text-white">1,200+</p>
                                <p className="text-sm text-white/80">Courses</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">25k+</p>
                                <p className="text-sm text-white/80">Students</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">500+</p>
                                <p className="text-sm text-white/80">Instructors</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-none">
                            <div className="aspect-square md:aspect-[4/3] relative">
                                <img
                                    src="./hero.jpg"
                                    alt="Students learning online"
                                    className="object-contain w-full h-full drop-shadow-2xl rounded-xl"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-white/10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
