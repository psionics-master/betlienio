export default function TelegramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="120" fill="url(#tg-grad)" />
      <path
        d="M54 122.6l122.3-47.2c5.7-2.2 10.7 1.4 8.9 9.9l-20.8 98.1c-1.5 7-5.7 8.7-11.6 5.4l-32-23.6-15.4 14.9c-1.7 1.7-3.2 3.2-6.5 3.2l2.3-33 60.2-54.4c2.6-2.3-.6-3.6-4-1.3l-74.4 46.9-32-10c-7-2.2-7.1-7 1.5-9.9z"
        fill="#fff"
      />
      <defs>
        <linearGradient id="tg-grad" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
