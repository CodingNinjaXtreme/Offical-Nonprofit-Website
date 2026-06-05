import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="text-8xl font-bold text-blue-100 mb-4 select-none">404</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h1>
      <p className="text-slate-500 max-w-md mb-8">
        The page you're looking for doesn't exist. It may have moved or the link might be wrong.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" /> Go Home
        </Link>
        <Link to="/competitions" className="btn-secondary">
          View Competitions <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
