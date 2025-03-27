import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router'
import useAuth from '../../hooks/useAuth'

export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { username, isAuthenticated } = useAuth();

    return (
        <header className="fixed inset-x-0 top-0 z-50 shadow-md h-16 px-8 bg-white">
            <nav aria-label="Global" className="p-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="-mt-4 hidden lg:flex lg:gap-x-12 justify-center items-center flex-1">
                        <NavLink to="/" className={({ isActive }) =>
                            `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                        >
                            Home
                        </NavLink>

                        <NavLink to="/destinations" end className={({ isActive }) =>
                            `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                        >
                            All Destinations
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>
                            `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                        >
                            About
                        </NavLink>

                        {isAuthenticated ? (
                            <>
                                <NavLink to="/destinations/create" className={({ isActive }) =>
                                    `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                                >
                                    Create Destination
                                </NavLink>

                                <NavLink to="/logout" className={({ isActive }) =>
                                    `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                                >
                                    Logout
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/register" className={({ isActive }) =>
                                    `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                                >
                                    Register
                                </NavLink>

                                <NavLink to="/login" className={({ isActive }) =>
                                    `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </div>
                    {isAuthenticated && (
                        <div className="hidden lg:flex items-center space-x-3">
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    `text-sm font-semibold ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}
                            >
                                {username}
                            </NavLink>

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                                alt="User Profile"
                                className="-mt-1 w-10 h-10 rounded-full border border-gray-300 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    )}
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 text-center">
                                <NavLink to="/" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Home</NavLink>
                                <NavLink to="/about" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>About</NavLink>
                                <NavLink to="/destinations" end className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Destinations</NavLink>
                                {isAuthenticated
                                    ? (
                                        <>
                                            <NavLink to="/destinations/create" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Create Destination</NavLink>
                                            <NavLink to="/logout" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Logout</NavLink>
                                        </>
                                    )
                                    : (
                                        <>
                                            <NavLink to="/register" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Register</NavLink>
                                            <NavLink to="/login" className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${isActive ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-900'}`}>Login</NavLink>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}