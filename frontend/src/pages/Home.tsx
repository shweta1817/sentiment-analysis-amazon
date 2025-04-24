import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
    return (
        <div className="font-sans bg-gray-50">
            {/* Hero Section */}
            <Hero/>

            {/* How It Works Section */}
            <section className="bg-white py-16">
                <div className="max-w-screen-xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <img src="https://static.vecteezy.com/system/resources/previews/015/181/358/non_2x/short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-to-make-it-shorter-vector.jpg" alt="Step 1" className="w-24 h-20 mx-auto mb-4 rounded-xl" />
                            <h3 className="text-xl font-medium text-gray-700">Step 1: Paste Product Link</h3>
                            <p className="text-gray-600">Copy and paste the Amazon product link or enter product details.</p>
                        </div>
                        <div className="text-center">
                            <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/18994524-astronauta-esta-lavando-pratos-e-copos-gratis-vetor.jpg" alt="Step 2" className="w-24 h-20 mx-auto mb-4 rounded-xl" />
                            <h3 className="text-xl font-medium text-gray-700">Step 2: AI Analyzes Reviews</h3>
                            <p className="text-gray-600">Our NLP-powered AI analyzes thousands of reviews to extract honest insights.</p>
                        </div>
                        <div className="text-center">
                            <img src="https://img.freepik.com/free-vector/cute-astronaut-traveling-with-suitcase-phone-cartoon-vector-icon-illustration-science-holiday_138676-7218.jpg" alt="Step 3" className="w-24 h-20 mx-auto mb-4 rounded-xl" />
                            <h3 className="text-xl font-medium text-gray-700">Step 3: Get Insights</h3>
                            <p className="text-gray-600">Receive a detailed report on product quality, pros, cons, and more.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What Our Users Say</h2>
                    <div className="flex flex-col items-center">
                        <div className="bg-white shadow-lg p-8 max-w-md mx-auto rounded-lg">
                            <p className="text-gray-600">"This tool saved me hours of reading reviews. The insights were spot-on!"</p>
                            <p className="text-gray-700 mt-4 font-semibold">John Doe</p>
                            <p className="text-gray-500">Verified User</p>
                        </div>
                        <div className="bg-white shadow-lg p-8 max-w-md mx-auto rounded-lg mt-8">
                            <p className="text-gray-600">"I avoided buying a low-quality product thanks to this tool. Highly recommended!"</p>
                            <p className="text-gray-700 mt-4 font-semibold">Jane Smith</p>
                            <p className="text-gray-500">Verified User</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#8763e0] py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Stop Wasting Time on Fake Reviews</h2>
                    <p className="mb-6">Get instant, AI-powered insights on any Amazon product.</p>
                    <a
                        href="/"
                        className="bg-white text-[#8763e0] rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:bg-blue-50"
                    >
                        Analyze a Product Now
                    </a>
                </div>
            </section>

            {/* Popular Products Section */}
            <section className="bg-white py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Popular Product Reviews</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <img src="https://m.media-amazon.com/images/I/711l4y8aNlL._SX679_.jpg" alt="Product 1" className="w-full h-48 object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Bluetooth Headphones</h3>
                            <p className="text-gray-600">3.9/5 | 190+ reviews analyzed</p>
                            <a href="https://amzn.in/d/8X8hDR0" className="text-[#8763e0] mt-4 inline-block">View Insights</a>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <img src="https://m.media-amazon.com/images/I/61bm7UEdGAL._SX679_.jpg" alt="Product 2" className="w-full h-48 object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Noise Pulse 2 Max</h3>
                            <p className="text-gray-600">4.2/5 | 15,500+ reviews analyzed</p>
                            <a href="https://amzn.in/d/9cxAbeb" className="text-[#8763e0] mt-4 inline-block">View Insights</a>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <img src="https://m.media-amazon.com/images/I/81yobRRV8nL._SX679_.jpg" alt="Product 3" className="w-full h-48 object-contain rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Cookwell Bullet Mixer Grinder</h3>
                            <p className="text-gray-600">4.2/5 | 20,000+ reviews analyzed</p>
                            <a href="https://amzn.in/d/d0WriN8" className="text-[#8763e0] mt-4 inline-block">View Insights</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-screen-xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800">How does the AI analyze reviews?</h3>
                            <p className="text-gray-600 mt-4">Our AI uses Natural Language Processing (NLP) to analyze sentiment, extract key themes, and identify pros and cons from thousands of reviews.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800">Is this tool free to use?</h3>
                            <p className="text-gray-600 mt-4">Yes, our basic product review analysis is completely free. You can analyze any Amazon product without any charges.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800">Can I trust the insights?</h3>
                            <p className="text-gray-600 mt-4">Absolutely! Our AI is trained on millions of reviews and provides unbiased, data-driven insights to help you make informed decisions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;