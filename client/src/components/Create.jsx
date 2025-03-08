export default function Create() {
  return (


    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div className="gap-4 sm:grid-cols-2 text-center">
            <label className="sr-only " htmlFor="name">Country</label>
            <input
              className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="gap-4 sm:grid-cols-2 text-center">
            <div>
              <label className="sr-only" htmlFor="email">Town</label>
              <input
                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>
          </div>

          <div className="gap-4 sm:grid-cols-2 text-center">
            <div>
              <label className="sr-only" htmlFor="message">Destination name</label>

              <textarea
                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
