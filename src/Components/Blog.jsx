import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t border-b divide-y">
                    <div className=" text-center py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        what is cors?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                            </p>
                        </div>
                    </div>
                    <div className=" text-center py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        Why are you using firebase? What other options do you have to implement authentication?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. <br />Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                            </p>
                        </div>
                    </div>
                    <div className=" text-center py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        How does the private route work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            </p>
                        </div>
                    </div>
                    <div className=" text-center py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        What is Node? How does Node work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Node. js is a runtime environment.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node. js wastes no time or resources on waiting for I/O requests to return.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;