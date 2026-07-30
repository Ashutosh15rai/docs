import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <Container size="sm" className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 mb-6">
          <AlertCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
          404
        </h1>
        <p className="mt-3 text-lg font-semibold text-gray-900">
          Page Not Found
        </p>
        <p className="mt-2 text-base text-gray-500 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the homepage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
}
