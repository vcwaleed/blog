'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import fakePosts from '../../../data/fakePosts';
import Loader from './Loader';
import Link from 'next/link';
export default function ArticlePage({ params }) {
    const [id, setId] = useState(null);
    useEffect(() => {
        (async () => {
            const unwrappedParams = await params;
            setId(unwrappedParams.articals);
        })();
    }, [params]);
    if (!id) {

        return <Loader/>;
    }
    const article = fakePosts.find((post) => post.id === parseInt(id));

    if (!article) {
        return <h1 className="text-center text-2xl font-bold">Article Not Found</h1>;
    }
    return (
        <div className="max-w-screen-md mx-auto p-6">
             <span className="bg-blue-500 text-white text-sm p-2 rounded-md px-2 pb-2">
                                {article.impact}
                            </span>
            <h1 className="text-3xl font-bold mb-4 my-6">{article.title}</h1>
            <div className=" flex mt-6 text-gray-500 space-x-4 mb-3">
                <p>{article.person}</p>
                <p>{article.date}</p>
            </div>
            <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={350}
                className="rounded-lg w-[85%]"
                objectFit="cover"/>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{article.description}</p>
            <p className="mt-4 text-sm    text-gray-500 dark:text-gray-300">{article.summary}</p>
            <Link href='/' className="text-blue-500 hover:text-blue-700 underline">
                Go to home
            </Link>  
        </div>
    );
}
