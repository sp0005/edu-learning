import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="flex items-center justify-center text-center px-4 py-16 bg-gradient-to-br from-blue-100/40 via-blue-50 to-cyan-100/40">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-md w-full max-w-4xl">
                <p className="inline-block text-sm font-medium bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full mb-4">
                    Ready to Learn?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Start Your Learning Journey Today
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Join thousands of learners mastering new skills with our expert-led courses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/courses"
                        className="rounded-full px-6 py-2 bg-white text-blue-700 font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Enroll Now
                    </Link>
                    <Link
                        to="/courses"
                        className="rounded-full px-6 py-2 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                    >
                        Browse Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
