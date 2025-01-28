import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 animate-bounce">404 - Page Not Found</h1>
            <p className="text-lg mb-4">Oops! The page you are looking for does not exist.</p>
            <Link href="/">
                <p className="text-blue-500 underline hover:text-blue-700 transition duration-300">Go back to Home</p>
            </Link>
        </div>
    );
}