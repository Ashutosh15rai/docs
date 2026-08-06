import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-lg text-gray-400 mb-8">Page not found</p>
        <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
