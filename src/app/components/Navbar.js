
'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-1 rtl:space-x-reverse"
                    >
                        <Image
                            src="/blog.png" // Replace with the path to your logo
                            height={3}
                            width={70}
                            className="h-12"
                            alt="Blog Logo"
                        />
                        <span className="self-center text-xl  whitespace-nowrap dark:text-white">
                            <span className="">Waleed</span><span className="font-semibold">Blog</span>
                        </span>
                    </Link>


                    {/* Hamburger Menu Button */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        <div className="flex space-x-6 mr-40">
                            <Link
                                href="/"
                                className="text-gray-500 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                            >
                                Home
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-500 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/singlepost"
                                className="whitespace-nowrap text-gray-500 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                            >
                                Single Post
                            </Link>
                            <Link
                                href="/pages"
                                className="text-gray-500 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                            >
                                Pages
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-500 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md  focus:border-orange-700"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                    >
                        <ul className="flex flex-col  p-4 space-y-4">
                            <li>
                                <Link
                                    href="#"
                                    className="block text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                                >
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/singlepost"
                                    className="block text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                                >
                                    Single Post
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pages"
                                    className="block text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                                >
                                    Pages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block text-gray-900 hover:text-orange-600 dark:text-white dark:hover:text-blue-500"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
