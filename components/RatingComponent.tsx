"use client";

import React, { Dispatch, SetStateAction } from "react";

export default function RatingComponent({
  rating,
  setRating,
}: {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="col-start-2 col-span-4 md:place-self-start place-self-center flex flex-col">
      <div className="flex items-center gap-1 mx-auto">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => setRating(star)}
            className={`
                text-primary
                hover:text-primary-foreground
                transition-colors
                text-sm
                ${
                  rating >= star
                    ? "text-yellow-500"
                    : "fill-muted stroke-muted-foreground"
                }
              `}
          >
            <StarIcon className="w-6 h-6" />
          </button>
        ))}
      </div>
      {/* <div className="text-primary font-medium text-wrap">
        {rating > 0
          ? `You rated this ${rating} out of 5 stars`
          : "Select a rating"}
      </div> */}
    </div>
  );
}
type StarIconProps = React.SVGProps<SVGSVGElement>;

function StarIcon(props: StarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
