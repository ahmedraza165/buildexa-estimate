export default function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#F5A623" : "#D8DBE0"}
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26 6.6.75-4.9 4.55 1.32 6.44L12 16.77 6.08 20l1.32-6.44L2.5 9.01l6.6-.75L12 2z" />
        </svg>
      ))}
    </div>
  );
}
