import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center p-32 px-4">
      <div className="card w-full max-w-md  animate-fadeIn">
        <div className="card-body text-center">
          <h1 className="text-7xl font-extrabold text-error mb-4 animate-bounce">
            404
          </h1>
          <p className="text-lg  mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/home" className="btn btn-primary btn-lg">
            Go to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
