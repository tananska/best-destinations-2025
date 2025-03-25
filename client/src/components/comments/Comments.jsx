import { useParams } from "react-router";
import { useCreateComment } from "../../api/commentsApi";

export default function Comments() {

    const { destinationId } = useParams();

    const { create } = useCreateComment();

    const formActionHandler = async (formData) => {
        const comment = formData.get('comment');
        try {
            await create(destinationId,comment);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments about this destination (20)</h2>
                </div>
                <form action={formActionHandler} className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" name="comment" rows="6"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Post comment
                    </button>
                </form>
                <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">Michael Gough</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
                        </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                        instruments for the UX designers. The knowledge of the design tools are as important as the
                        creation of the design strategy.</p>
                </article>
                <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">Bonnie Green</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Mar. 12, 2022</p>
                        </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                    <div className="flex items-center mt-4 space-x-4">
                    </div>
                </article>
                <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">Bonnie Green</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Mar. 12, 2022</p>
                        </div>
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
                    <div className="flex items-center mt-4 space-x-4">
                    </div>
                </article>
            </div>
        </section>
    )
}