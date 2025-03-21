import { Link, useNavigate } from "react-router"
import { useActionState, useContext } from "react";
import { useRegister } from "../../api/authApi";

export default function Register() {

    const navigate = useNavigate();
    const { register } = useRegister();

    const registerHandler = async (_, formData) => {

        const data = Object.fromEntries(formData);
        await register(data);

        navigate('/');
    }

    const [_, loginAction, isPending] = useActionState(registerHandler, { email: '', password: '' });
    return (
        <section className="relative flex items-center h-screen bg-gray-100">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-70 sm:mx-auto">

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={loginAction} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm/6 font-medium text-gray-900">
                                    Repeat password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="rePassword"
                                    type="password"
                                    required
                                    autoComplete="rePassword"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Have an Account?{' '}
                        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}