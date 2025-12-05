"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Eye, ArrowLeft, ExternalLink } from "lucide-react";

export function Wrapper({ component, children }) {
  const [likeCount, setLikeCount] = useState(parseInt(component.likes));
  const [fillLikeHeart, setFillLikeHeart] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

  // Reset heart scale animation
  useEffect(() => {
    let timeout;
    if (animateHeart) {
      timeout = setTimeout(() => setAnimateHeart(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [animateHeart]);

  const handleLikeClick = () => {
    if (fillLikeHeart) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      setAnimateHeart(true);
    }
    setFillLikeHeart(!fillLikeHeart);
  };

  return (
    <div className="container mx-auto min-h-screen bg-white text-black p-5 md:p-10">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-600 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <a
          href={component.viewCode}
          target="_blank"
          className="flex items-center gap-1 text-gray-600 hover:text-black transition"
        >
          View Code <ExternalLink size={14} />
        </a>
      </div>

      {/* Title + Meta */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {component.title}
          </h1>
          <p className="text-gray-600 text-sm max-w-xl mb-1">
            {component.description}
          </p>

          {/* Inspired By / Credits */}
          {component.inspiredBy &&
            component.inspiredBy.sourceName &&
            component.inspiredBy.sourceUrl && (
              <p className="text-xs text-gray-400">
                Inspired by:{" "}
                <a
                  href={component.inspiredBy.sourceUrl}
                  target="_blank"
                  className="underline hover:text-gray-600 font-semibold"
                >
                  {component.inspiredBy.sourceName}
                </a>
              </p>
            )}
        </div>

        {/* Analytics */}
        <div className="flex items-center gap-4">
          {/* Likes */}
          <button onClick={handleLikeClick} className="flex items-center gap-1">
            <Heart
              size={16}
              className={`transition-transform duration-500 ${
                fillLikeHeart ? "text-pink-500 fill-current" : "text-gray-500"
              } ${animateHeart ? "scale-125" : "scale-100"}`}
            />
            <span className="text-gray-700">{likeCount}</span>
          </button>

          {/* Views */}
          <div className="flex items-center gap-1">
            <Eye size={16} className="text-blue-500" />
            <span className="text-gray-700">{component.views || 0}</span>
          </div>
        </div>
      </div>

      {/* Component Preview Box */}
      <div>
        {children}
      </div>
    </div>
  );
}
