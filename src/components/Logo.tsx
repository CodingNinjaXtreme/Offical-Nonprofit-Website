type Props = {
  className?: string;
  size?: number;
  variant?: 'gradient' | 'mono';
};

export default function Logo({ className = '', size = 36, variant = 'gradient' }: Props) {
  const stroke = variant === 'mono' ? 'currentColor' : '#ffffff';
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl shadow-md ${
        variant === 'gradient'
          ? 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 group-hover:shadow-blue-300/40'
          : 'bg-transparent'
      } transition-shadow duration-300 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox="0 0 64 64"
        width={size * 0.62}
        height={size * 0.62}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 32c0-6.5 5-11 11-11 4.5 0 7 2.5 11 7l4 5c2.5 3 4.5 4 7 4 3 0 5.5-2.5 5.5-6S50 25 47 25c-2.5 0-4.5 1-7 4l-4 5c-4 4.5-6.5 7-11 7-6 0-11-4.5-11-9z"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
