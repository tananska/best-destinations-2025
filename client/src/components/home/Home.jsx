import Navigation from '../navigation/Navigation'

import homeVideo from '../../../public/videos/homeVideo.webm'
import './video.module.css'
export default function Home() {
    return (
        <div className="relative isolate w-screen h-screen px-6 pt-14 lg:px-8">
            <div className="absolute inset-0">
                <video className="w-full h-full object-cover" src={homeVideo} autoPlay loop muted />
            </div>
            <div className="absolute top-0 left-0 w-full z-10">
                <Navigation />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-4xl font-bold">Find the best destination for you</h1>
            </div>
        </div>
    )
}
