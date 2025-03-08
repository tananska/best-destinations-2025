export default function Create() {

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div className="gap-4 sm:grid-cols-2 text-center">
            <label className="sr-only " htmlFor="country"></label>
            <input
              className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="Country"
              type="text"
              id="country"
            />
          </div>

          <div className="gap-4 sm:grid-cols-2 text-center">
            <div>
              <label className="sr-only" htmlFor="country"></label>
              <input
                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Town"
                type="text"
                id="country"
              />
            </div>
          </div>

          <div className="gap-4 sm:grid-cols-2 text-center">
            <div>
              <label className="sr-only" htmlFor="name"></label>
              <input
                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Destination name"
                type="text"
                id="name"
              />
            </div>
          </div>

          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Best season to visit</label>
          <select id="countries" className="bg-white outline-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 w-full p-2.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <option value="choose">Choose a season</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>

          <div className="gap-4 sm:grid-cols-2 text-center">
            <div>
              <label className="sr-only" htmlFor="description"></label>

              <textarea
                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Description"
                rows="8"
                id="description"
              ></textarea>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Create Destination
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
