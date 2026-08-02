type Props = {
  className?: string;
  size?: number;
  /**
   * `gradient` is kept as the default variant name for backwards compatibility
   * with existing call sites. It now renders a solid ink monogram block.
   * `mono` renders the glyph alone in `currentColor`.
   */
  variant?: 'gradient' | 'mono';
};

export default function Logo({ className = '', size = 36, variant = 'gradient' }: Props) {
  const isBlock = variant === 'gradient';

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-sm ${
        isBlock ? 'bg-ink text-paper' : 'bg-transparent text-current'
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox="0 0 64 64"
        width={size * 0.66}
        height={size * 0.66}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 32c0-6.5 5-11 11-11 4.5 0 7 2.5 11 7l4 5c2.5 3 4.5 4 7 4 3 0 5.5-2.5 5.5-6S50 25 47 25c-2.5 0-4.5 1-7 4l-4 5c-4 4.5-6.5 7-11 7-6 0-11-4.5-11-9z"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
