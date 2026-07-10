import { socials } from "@/data/site";

const icons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.12-2.45-.12-2.4 0-4.05 1.46-4.05 4.15v2.32H7.5V13h2.7v8h3.3Z" />
    </svg>
  ),
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.8H3.6V20h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.4 13.9c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.8h-2.9V20h2.9v-5.9c0-1.6.7-2.5 2-2.5 1.2 0 1.9.8 1.9 2.5V20h3.2v-6.1Z" />
    </svg>
  ),
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buildexa Estimate on ${s.name}`}
          title={s.name}
          className="flex h-7 w-7 items-center justify-center border border-current opacity-80 transition-opacity hover:opacity-100"
        >
          {icons[s.name]}
        </a>
      ))}
    </div>
  );
}
