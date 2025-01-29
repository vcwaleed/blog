import Image from 'next/image';
import Link from 'next/link';
import fakePosts from '@/data/fakePosts';
export default function Post() {
    return (
        <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-9 dark:bg-backgroundcolor">
            <span className="font-bold text-xl">Latest Posts</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 mt-6 p-0">
                {fakePosts.map((post) => (
                    <div
                        key={post.id}
                        className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-4 p-0 hover:drop-shadow-lg hover:outline-4   dark:hover:drop-shadow-2xl"
                    >
                        <Link href="#">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={260}
                                height={200}
                                className="rounded-t-lg w-full"
                                objectFit="cover"
                            />
                        </Link>
                        <div className="p-4">
                            <span className="bg-tech text-techblue text-xs p-1 rounded-md px-1">
                                {post.impact}
                            </span>
                            <Link href={`/article/${post.id}`}>
                                <h5 className="mt-2 text-base font-bold tracking-tight text-gray-900 dark:text-white hover:text-violet-700 dark:hover:text-violet-400">
                                    {post.title}
                                </h5>
                            </Link>
                            <p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
                                {post.description}
                            </p>
                        </div>
                        <div className="flex items-center p-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                                <Image
                                    src={post.profile}
                                    alt="Author Image"
                                    width={30}
                                    height={27}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="ml-3 flex  ">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {post.person}
                                </p>
                                <p className="text-sm text-gray-400 pl-2  dark:text-gray-400">
                                    {post.date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
