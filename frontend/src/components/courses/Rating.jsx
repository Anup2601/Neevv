import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

function Rating({ initialRating, onRate, readOnly = false, size = "2xl" }) {
  const [rating, setRating] = useState(initialRating || 0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    if (readOnly) return;
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (initialRating) setRating(initialRating);
  }, [initialRating]);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverRating || rating);

        return (
          <span
            key={index}
            className={`
              cursor-pointer 
              transition-all 
              duration-200 
              ${isFilled ? "text-yellow-500" : "text-gray-300"} 
              ${size === "xl" ? "text-xl" : size === "2xl" ? "text-2xl" : "text-3xl"}
              hover:scale-125
            `}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          >
            <Star />
          </span>
        );
      })}
      <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
    </div>
  );
}

export default Rating;
