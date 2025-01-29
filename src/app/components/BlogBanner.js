import Image from 'next/image';

export default function BlogBanner() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10 dark:bg-backgroundcolor ">
            <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md items-center dark:bg-bannercolor">
                <div className="flex items-center mb-4">
                    <div className="w-[70px] h-[60px] rounded-full overflow-hidden">
                        <Image
                            src="/blog.png"
                            alt="Your Image"
                            width={80}
                            height={20}
                            objectFit="cover"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center ml-3'>
                        <span className="text-gray-900 dark:text-white ml-5 text-xl">Talha Waleed</span>
                        <span className="text-gray-500 dark:text-white ml-5 text-sm">Collaborator & Editor</span>
                    </div>
                </div>
                <p className='w-full flex justify-center text-lg  text-gray-500 dark:text-gray-500 '>Meet Talha Waleed, a passionate writer and blogger with a love for technology and travel.<br /> Jonathan holds a degree in Computer Science and has spent years working in the tech industry, <br />gaining a deep understanding of the impact technology has on our lives.</p>
                <div className="flex justify-center mt-6 space-x-6 ">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded  text-gray-400 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.892-4.79 4.656-4.79 1.324 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.625h-3.123V24h6.117C23.404 24 24 23.405 24 22.674V1.326C24 .596 23.404 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded text-gray-400 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.99 9.99 0 0 1-2.828.775 4.958 4.958 0 0 0 2.165-2.725 9.94 9.94 0 0 1-3.127 1.194 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.194 9.74 4.902 4.902 0 0 1 .96 9.149v.061a4.917 4.917 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.927 4.927 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 20.078 13.944 13.944 0 0 0 7.548 22c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.015-.636A9.935 9.935 0 0 0 24 4.557z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded text-gray-400 hover:text-pink-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.057 2.012.272 2.478.454a4.997 4.997 0 0 1 1.808 1.194 4.997 4.997 0 0 1 1.194 1.808c.182.466.397 1.219.454 2.478.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.259-.272 2.012-.454 2.478a4.997 4.997 0 0 1-1.194 1.808 4.997 4.997 0 0 1-1.808 1.194c-.466.182-1.219.397-2.478.454-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.057-2.012-.272-2.478-.454a4.997 4.997 0 0 1-1.808-1.194 4.997 4.997 0 0 1-1.194-1.808c-.182-.466-.397-1.219-.454-2.478-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.057-1.259.272-2.012.454-2.478a4.997 4.997 0 0 1 1.194-1.808 4.997 4.997 0 0 1 1.808-1.194c.466-.182 1.219-.397 2.478-.454 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.755 0 8.362.014 7.092.073 5.824.132 4.973.37 4.242.694a7.007 7.007 0 0 0-2.55 1.656A7.007 7.007 0 0 0 .694 4.242c-.324.731-.562 1.582-.621 2.85C.014 8.362 0 8.755 0 12c0 3.245.014 3.638.073 4.908.059 1.268.297 2.119.621 2.85a7.007 7.007 0 0 0 1.656 2.55 7.007 7.007 0 0 0 2.55 1.656c.731.324 1.582.562 2.85.621C8.362 23.986 8.755 24 12 24c3.245 0 3.638-.014 4.908-.073 1.268-.059 2.119-.297 2.85-.621a7.007 7.007 0 0 0 2.55-1.656 7.007 7.007 0 0 0 1.656-2.55c.324-.731.562-1.582.621-2.85.059-1.27.073-1.663.073-4.908 0-3.245-.014-3.638-.073-4.908-.059-1.268-.297-2.119-.621-2.85a7.007 7.007 0 0 0-1.656-2.55A7.007 7.007 0 0 0 19.908.694c-.731-.324-1.582-.562-2.85-.621C15.638.014 15.245 0 12 0z" />
                            <circle cx="12" cy="12" r="3.5" />
                        </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded text-gray-400 hover:text-red-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.002 3.002 0 0 0-2.118-2.118C19.89 3.568 12 3.568 12 3.568s-7.89 0-9.38.5A3.002 3.002 0 0 0 .502 6.186C0 7.688 0 12 0 12s0 4.312.502 5.814a3.002 3.002 0 0 0 2.118 2.118c1.49.5 9.38.5 9.38.5s7.89 0 9.38-.5a3.002 3.002 0 0 0 2.118-2.118C24 16.312 24 12 24 12s0-4.312-.502-5.814zM9.545 15.568V8.432L15.568 12l-6.023 3.568z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}