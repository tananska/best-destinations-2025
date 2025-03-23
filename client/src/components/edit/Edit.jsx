import { useParams } from "react-router";
import { useGetOneDestination } from "../../api/destinationsApi";

export default function Edit() {

    const { destinationId } = useParams();
    const { destination } = useGetOneDestination()

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                    <div className="gap-4 sm:grid-cols-2 text-center">
                        <label className="sr-only " htmlFor="country"></label>
                        <input
                            className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            placeholder="Country"
                            type="text"
                            name="country"
                            defaultValue={destination.country}
                        />
                    </div>

                    <div className="gap-4 sm:grid-cols-2 text-center">
                        <div>
                            <label className="sr-only" htmlFor="name"></label>
                            <input
                                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Destination name"
                                type="text"
                                name="name"
                                defaultValue={destination.name}
                            />
                        </div>
                    </div>

                    <div className="gap-4 sm:grid-cols-2 text-center">
                        <div>
                            <label className="sr-only" htmlFor="imageUrl"></label>
                            <input
                                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Image url"
                                type="text"
                                name="imageUrl"
                                defaultValue={destination.imageUrl}
                            />
                        </div>
                    </div>

                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Best season to visit</label>
                    <select name="seasons" className="bg-white outline-gray-300 text-gray-700 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 w-full p-2.5 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <option value="All seasons" selected={destination.seasons === 'All seasons'}>All seasons</option>
                        <option value="Spring" selected={destination.seasons === 'Spring'}>Spring</option>
                        <option value="Summer" selected={destination.seasons === 'Summer'}>Summer</option>
                        <option value="Fall" selected={destination.seasons === 'Fall'}>Fall</option>
                        <option value="Winter" selected={destination.seasons === 'Winter'}>Winter</option>
                    </select>

                    <div className="gap-4 sm:grid-cols-2 text-center">
                        <div>
                            <label className="sr-only" htmlFor="description"></label>

                            <textarea
                                className="text-left w-80 rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                placeholder="Description"
                                rows="8"
                                name="description"
                                defaultValue={destination.description}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 m-10">
                        <button to={`/destination/${destination._id}/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Edit
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}