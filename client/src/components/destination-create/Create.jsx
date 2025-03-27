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
    <div className="relative h-screen bg-gray-200 dark:bg-gray-800">
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

    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="container bg-white p-8 shadow-lg rounded-lg">
        <form action={formSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              className="w-full px-4 py-2 border rounded" 
              placeholder="Username" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded" 
              placeholder="Email" 
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
