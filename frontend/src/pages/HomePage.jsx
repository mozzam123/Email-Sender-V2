const Home = () => {
    return (
        <div id="webcrumbs" className="flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                        <span className="material-symbols-outlined text-3xl text-white">mail</span>
                    </div>
                    <h1 className="text-2xl font-bold text-blue-500">Email Sender</h1>
                    <p className="text-blue-400">Compose and send your email</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">Sender</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Your email address"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">Recipient</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Recipient's email address"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">Subject</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="Email subject"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">Body</label>
                        <textarea
                            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 min-h-[120px] resize-y"
                            placeholder="Type your message here..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-600 mb-2">Attachment</label>
                        <div className="flex items-center gap-2">
                            <input type="file" className="hidden" id="attachment" />
                            <label
                                htmlFor="attachment"
                                className="px-4 py-2 bg-blue-50 text-blue-500 rounded-lg border border-blue-200 hover:bg-blue-100 cursor-pointer transition duration-200 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">attach_file</span>
                                Choose File
                            </label>
                            <span className="text-sm text-blue-400">No file chosen</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 rounded border-blue-300 text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-blue-600">Save as draft</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 rounded border-blue-300 text-blue-500 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-blue-600">High priority</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 font-medium flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined">send</span>
                        Send Email
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-blue-600">
                        Need to check your inbox?
                        <a href="#" className="ml-1 text-blue-500 hover:text-blue-700 font-medium transition duration-200">
                            Go to Inbox
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;