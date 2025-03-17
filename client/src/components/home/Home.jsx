import homeView from '/images/homeView.jpg';
export default function Home() {
    return (

        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-100">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <h1 className="mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Find the best destination for you</span></h1>
                <div className="sm:mb-8 sm:flex sm:justify-center">
                    <div className="flex items-center gap-2 p-2 border rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 max-w-md w-full">
                        <input
                            type="text"
                            placeholder="Country name..."
                            className="px-3 py-1 text-sm text-gray-600 outline-none bg-transparent flex-1"
                        />
                        <button className="px-4 py-1 text-sm text-white bg-indigo-600 rounded-full hover:bg-indigo-700">
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[1000px] h-[500px] sm:h-[700px] md:h-[800px] lg:h-[600px]">
                    <div className="relative w-full sm:w-[130%] lg:w-[140%] h-full">
                        <img
                            src={homeView}
                            alt="background"
                            className="object-cover w-full h-full transform translate-x-[-15%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
