
import homeVideo from '../../videos/homeVideo.webm'
import { Card } from '../card/Card'

export default function Home() {
    return (
        <>
            <div className="relative isolate w-screen h-screen px-6 pt-14 lg:px-8">
                <div className="absolute inset-0">
                    <video className="w-full h-full object-cover" src={homeVideo} autoPlay loop muted />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Explore the world with us</h1>
                </div>
            </div>
            <p className="text-2xl text-center font-serif">The last 3 destinations added</p>

            <div className='flex flex-row min-h-100 justify-center items-center gap-10 bg-gray-100'>
                <Card />
            </div>
        </>
    )
}
