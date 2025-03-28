import { useNavigate } from "react-router";
import { useCreateDestination } from "../../api/destinationsApi";
import video from '../../assets/videos/createPage.mp4'

export default function Create() {

  const navigate = useNavigate();
  const { create } = useCreateDestination();

  const formSubmit = async (formData) => {

    const destinationData = Object.fromEntries(formData);
    await create(destinationData);
    navigate('/destinations');

  }

  return (
    <div className="relative h-screen bg-gray-200 blue:bg-blue-500">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex items-center m-10 justify-center h-full">
        <div className="container bg-gray-100 w-150 p-8 shadow-lg rounded-lg font-style: italic">
          <form action={formSubmit}>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., France"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="town" className="block text-gray-700">Town</label>
              <input
                type="text"
                name="town"
                id="town"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., Paris"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., Eiffel Tower"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700">Image url</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                className="w-full px-4 py-2 border rounded"
                placeholder="Url address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Select options</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                className="w-full px-4 py-2 border rounded"
                placeholder="e.g., The Eiffel Tower is a wrought-iron lattice tower..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
