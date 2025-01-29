import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100  dark:bg-slate-900">
            <div className="container mx-auto py-10 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white ">About</h3>
                    <div className='text-gray-500'>
                        <p>
                            In popular usage, wealth can be described as an abundance of items of economic value, or the state of controlling or possessing such items, usually in the form of money, real estate and personal property
                        </p>
                        <p className='dark:text-white'>Email: talha@info.net</p>

                        <p className='dark:text-white'>Phone: 000 123 456 789</p>
                    </div>
                </div>

                <div className='sm:ml-16 ml-1 dark:text-white'>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-500 ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/archived">Archived</Link></li>
                        <li><Link href="/author">Author</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">Category</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li>Lifestyle</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Business</li>
                        <li>Economy</li>
                        <li>Sports</li>
                    </ul>
                </div>

                <div className='bg-white p-4 rounded dark:bg-gray-800'>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">Weekly Newsletter</h3>
                    <p className='dark:text-gray-600'>Get blog articles and offers via email.</p>
                    <form>
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded mb-4 dark:bg-gray-700" />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-200 p-4 grid sm:grid-cols-2 grid-cols-1 gap-4">
                <span className="text-center sm:text-left sm:pl-16 dark:text-lightgray">&copy; talhawaleed. All Rights Reserved.</span>
                <div className="text-center sm:text-right sm:pr-[122px] dark:text-lightgray">
                    <Link href="/terms" className="hover:underline">Terms of Use</Link> |
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link> |
                    <Link href="/cookie" className="hover:underline">Cookie Policy</Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;