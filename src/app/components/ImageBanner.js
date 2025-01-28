import Image from "next/image";


export default function ImageBanner() {
    return (
        <>

            <div className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Welcome to the Blog
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        A place to share your knowledge and experiences
                    </p>
                </div>
            </div>

            <div className="relative flex items-center justify-center mb-20">
                <Image
                    src="/banner1.jpg"
                    height={5}
                    width={1100}
                    className="h-[450px] "
                    alt="Blog Image"
                />
                <div className="absolute top-[85%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 max-w-[420px] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <span className="bg-blue-500 text-white text-sm p-1 rounded-md px-1">Technology</span>
                    <a href="/pages">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            The impact of Technology on the Workplace: How Technology is changing
                        </h5>
                    </a>
                    <div className="flex ">
                        <div className=" w-[25px] h-[25px] rounded-full overflow-hidden">
                            <Image
                                src="/blog.png"
                                alt="Your Image"
                                width={25}
                                height={20}
                                objectFit="cover"
                            />
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 ml-3  text-sm">By Talha Waleed</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-5 text-sm">12th Aug 2021</span>
                    </div>
                </div>
            </div>
        </>
    );
}
