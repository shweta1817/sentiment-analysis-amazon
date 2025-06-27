import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-section.svg";

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f9f7ff] to-[#f0ebfa] px-4 py-12">
            <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
                {/* Left Column - Text & Buttons */}
                <div className="text-center md:text-left space-y-8 order-2 md:order-1">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                        Get <span className="text-[#7c4dff]">Honest</span> Product Insights
                    </h1>
                    <p className="text-lg text-gray-600 md:text-xl max-w-[500px] mx-auto md:mx-0">
                        With so many similar products and prices all over the place, it's hard to know what's really worth your money. Let us help you make the right choice.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                        <Link to="/review-bot" className="w-full md:w-auto">
                            <button className="w-full transform rounded-lg bg-[#7c4dff] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#9564ff] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7c4dff] focus:ring-opacity-50 md:px-10">
                                Try Us Now
                            </button>
                        </Link>
                        <Link
                            to='#'
                            className="w-full transform rounded-lg border-2 border-[#7c4dff] bg-transparent px-8 py-3.5 text-sm font-semibold text-[#7c4dff] shadow-lg transition-all hover:bg-[#f5f0ff] hover:scale-105 md:w-auto md:px-10"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="pt-2">
                        <p className="text-sm text-gray-500">No credit card required • Cancel anytime</p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative w-full max-w-[600px] mx-auto h-[25rem] overflow-hidden order-1 md:order-2">
                    <img
                        src={heroImage}
                        alt="Product Insight Illustration"
                        className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-20"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;