"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, Eye, ExternalLink } from "lucide-react";

export function Card({
  id,
  visualSrc,
  title,
  description,
  type,
  likes,
  views,
  viewCode,
  inspiredBy,
}) {
  const [likeCount, setLikeCount] = useState(parseInt(likes));
  const [fillLikeHeart, setFillLikeHeart] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
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
    <div className="group bg-gray-50 border-2 shadow-sm hover:shadow-md transition-all flex flex-col border-gray-200 rounded-sm h-full ">
      {/* Thumbnail / Preview */}
      <div className="relative w-full h-44 overflow-hidden">
        {visualSrc ? (
          <Image
            src={visualSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm bg-gray-50 font-bold">
            Coming Soon!
          </div>
        )}
      </div>

      {/* Body */}
      <div className="bg-gray-200 rounded-t-4xl px-5 pt-4 pb-2 flex flex-col flex-1">
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-2 tracking-tight">
            {description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
            {/* Inspired By / Credits */}
            {inspiredBy?.sourceName && inspiredBy?.sourceUrl && (
              <p className="text-[12px] text-gray-400 ">
                Inspired by:{" "}
                <a
                  href={inspiredBy.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600 font-semibold flex-nowrap"
                >
                  {inspiredBy.sourceName}
                </a>
              </p>
            )}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLikeClick}
                className="flex items-center gap-1"
              >
                <Heart
                  size={14}
                  className={`cursor-pointer text-pink-500 transition-transform duration-500 ${
                    animateHeart ? "scale-120" : "scale-100"
                  } ${
                    fillLikeHeart
                      ? "text-pink-500 fill-current"
                      : "text-pink-600"
                  }`}
                />
                <span className="text-gray-800">{likeCount}</span>
              </button>

              <div className="flex items-center gap-1">
                <Eye size={14} className="text-blue-500" />
                <span className="text-gray-800">{views || 0}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <Link
            href={`/${id}`}
            className="text-sm font-medium text-black hover:underline flex items-center justify-between gap-0.5 group"
          >
            View <ExternalLink size={12} className="group-hover:underline" />
          </Link>
          <a
            href={viewCode}
            target="_blank"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Code →
          </a>
        </div>
      </div>
    </div>
  );
}
