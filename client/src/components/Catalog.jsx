import { Link } from "react-router"

const products = [
    {
        id: 1,
        name: 'Paris',
        href: `/catalog/1/details`,
        imageSrc: 'https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg',
        imageAlt: "Paris image",
    },
    {
        id: 2,
        name: 'London',
        href: `/catalog/2/details`,
        imageSrc: 'https://railtour.ch/itineraries/destination-tours/London%20-%20Mit%20gutem%20Gewissen-95474/1098/image-thumb__1098__default_og_image/London%20-%20das%20gr%C3%BCne%20London%20entdecken-199835.c225e5cd.jpg',
        imageAlt: "London image",
    },
    {
        id: 3,
        name: 'Rome',
        href: `/catalog/3/details`,
        imageSrc: 'https://www.citalia.com/-/media/bynder/citalia-destinations/italy/cities/rome/rome-2023-colosseum-shutterstock-2120859782-hybris.jpg?rev=8aa72fc2fea643baa7b321f3553089de',
        imageAlt: "Rome image",
    },
    {
        id: 4,
        name: 'Bali',
        href: `/catalog/4/details`,
        imageSrc: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ports/benoa-bali-indonesia/overview/benoa-bali-indonesia-exotic-beach-white-sands.jpg?$1440x600$',
        imageAlt: "Bali image",
    },
    {
        id: 5,
        name: 'Bangkok',
        href: `/catalog/5/details`,
        imageSrc: 'https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg',
        imageAlt: "Bangkok image",
    },
    {
        id: 6,
        name: 'Dubai',
        href:`/catalog/6/details`,
        imageSrc: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Dubai/dubai-palmiye-ada.jpg',
        imageAlt: "Dubai image",
    },
]

export default function Catalog() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 font-mono">Explore by click on picture</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700 ">
                                        <Link to={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}