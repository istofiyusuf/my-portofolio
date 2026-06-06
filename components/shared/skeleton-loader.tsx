"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rounded" | "rectangular";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "none";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "text",
  width,
  height,
  animation = "pulse",
}) => {
  const baseStyles = "bg-gray-200 dark:bg-gray-800";

  const variantStyles = {
    text: "rounded",
    circular: "rounded-full",
    rounded: "rounded-xl",
    rectangular: "rounded-none",
  };

  const animationStyles = {
    pulse: "animate-pulse",
    wave: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shimmer_1.5s_infinite] dark:before:via-white/5",
    none: "",
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === "number" ? `${width}px` : width;
  if (height)
    style.height = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      style={style}
    />
  );
};

// Skeleton for Hero Section
export const SkeletonHero = () => {
  return (
    <div className="skeleton-hero">
      <div className="skeleton-hero-container">
        {/* Left Column */}
        <div className="skeleton-hero-left">
          <Skeleton width={120} height={28} className="mb-4" />
          <Skeleton width={400} height={68} className="mb-3" />
          <Skeleton width={300} height={32} className="mb-4" />
          <Skeleton width={500} height={24} className="mb-6" />
          <div className="flex gap-4 mb-8">
            <Skeleton width={160} height={48} variant="rounded" />
            <Skeleton width={140} height={48} variant="rounded" />
          </div>
          <div className="flex gap-8">
            <Skeleton width={80} height={48} variant="rounded" />
            <Skeleton width={120} height={48} variant="rounded" />
            <Skeleton width={100} height={48} variant="rounded" />
          </div>
        </div>

        {/* Right Column */}
        <div className="skeleton-hero-right">
          <Skeleton width={340} height={340} variant="circular" />
        </div>
      </div>
    </div>
  );
};

// Skeleton for Expertise Section
export const SkeletonExpertise = () => {
  return (
    <div className="skeleton-expertise">
      <div className="text-center mb-12">
        <Skeleton
          width={100}
          height={24}
          className="mx-auto mb-4"
          variant="rounded"
        />
        <Skeleton width={250} height={48} className="mx-auto mb-3" />
        <Skeleton width={350} height={24} className="mx-auto" />
      </div>
      <div className="skeleton-grid grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton-card">
            <Skeleton
              width={56}
              height={56}
              variant="rounded"
              className="mb-4"
            />
            <Skeleton width={180} height={24} className="mb-2" />
            <Skeleton width={240} height={60} className="mb-3" />
            <div className="flex gap-2">
              <Skeleton width={70} height={28} variant="rounded" />
              <Skeleton width={80} height={28} variant="rounded" />
              <Skeleton width={60} height={28} variant="rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skeleton for Projects Section
export const SkeletonProjects = () => {
  return (
    <div className="skeleton-projects">
      <div className="text-center mb-12">
        <Skeleton
          width={100}
          height={24}
          className="mx-auto mb-4"
          variant="rounded"
        />
        <Skeleton width={280} height={48} className="mx-auto mb-3" />
        <Skeleton width={380} height={24} className="mx-auto" />
      </div>
      <div className="flex justify-center gap-3 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} width={80} height={36} variant="rounded" />
        ))}
      </div>
      <div className="skeleton-grid grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-project-card">
            <Skeleton width="100%" height={200} variant="rounded" />
            <div className="p-5">
              <Skeleton width={160} height={24} className="mb-2" />
              <Skeleton width={200} height={40} className="mb-3" />
              <div className="flex gap-2">
                <Skeleton width={60} height={24} variant="rounded" />
                <Skeleton width={70} height={24} variant="rounded" />
                <Skeleton width={50} height={24} variant="rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Skeleton for Contact Section
export const SkeletonContact = () => {
  return (
    <div className="skeleton-contact">
      <div className="text-center mb-12">
        <Skeleton
          width={100}
          height={24}
          className="mx-auto mb-4"
          variant="rounded"
        />
        <Skeleton width={280} height={48} className="mx-auto mb-3" />
        <Skeleton width={380} height={24} className="mx-auto" />
      </div>
      <div className="skeleton-contact-grid">
        <div className="skeleton-contact-info">
          <Skeleton width={200} height={32} className="mb-3" />
          <Skeleton width={300} height={60} className="mb-6" />
          <div className="space-y-4">
            <Skeleton width={250} height={50} variant="rounded" />
            <Skeleton width={200} height={50} variant="rounded" />
            <Skeleton width={220} height={50} variant="rounded" />
          </div>
        </div>
        <div className="skeleton-contact-form">
          <Skeleton
            width="100%"
            height={50}
            variant="rounded"
            className="mb-4"
          />
          <Skeleton
            width="100%"
            height={50}
            variant="rounded"
            className="mb-4"
          />
          <Skeleton
            width="100%"
            height={120}
            variant="rounded"
            className="mb-4"
          />
          <Skeleton width={160} height={48} variant="rounded" />
        </div>
      </div>
    </div>
  );
};

// Main Page Skeleton
export const PageSkeleton = () => {
  return (
    <main>
      <SkeletonHero />
      <SkeletonExpertise />
      <SkeletonProjects />
      <SkeletonContact />
    </main>
  );
};

export default PageSkeleton;
