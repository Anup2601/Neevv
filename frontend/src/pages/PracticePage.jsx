import { Link } from "react-router-dom";
import Lottie from "lottie-react";

export default function PracticePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-lg  p-6 animate-fadeIn">
        <div className="card-body text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-warning mb-2 animate-bounce">
            Practice Page
          </h1>
          <p className="text-lg  mb-6">
            We are currently working on this section. Stay tuned for upcoming practice opportunities!
          </p>

          <Link
            to="/home"
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
