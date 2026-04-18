export const FR_COLORS = {
  snow: '#EFF1F4',
  navy: '#1A223D',
  indigo: '#3434D6',
  blueStart: '#1960F9',
  blueEnd: '#0D8CFF',
  cyanStart: '#12DEFF',
  cyanEnd: '#29C8F9',
  cloud: '#EDEFF7',
  graphite: '#6E7180',
}

export function FundRaiseMark({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 478 520" width={size} height={size} aria-hidden>
      <defs>
        <linearGradient id="fr-b" x1="44" y1="280" x2="136" y2="189" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1960F9" />
          <stop offset="1" stopColor="#0D8CFF" />
        </linearGradient>
        <linearGradient id="fr-c" x1="25" y1="211" x2="355" y2="541" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#12DEFF" />
          <stop offset="1" stopColor="#29C8F9" />
        </linearGradient>
      </defs>
      <polygon fill="url(#fr-b)" points="0 235 7 230 174 227 179 235 168 241 8 243" />
      <polygon fill="url(#fr-b)" points="208 276 199 276 112 380 113 394 123 401 290 399 292 393 295 378 216 276" />
      <path fill="url(#fr-b)" d="M477 164L292 393 208 276l93-115c1-2 3-3 5-3l168 0c3 0 5 4 3 6Z" />
      <polygon fill="#3434D6" points="292 393 113 394 208 276" />
      <path fill="url(#fr-c)" d="M375 519l-168 1c-2 0-4-1-6-3L113 394l179 0 86 120c2 2 0 6-3 6ZM179 235L0 235l113 158 95-117-29-41Z" />
      <path fill="url(#fr-b)" d="M364 6L179 235 0 235 188 3c1-2 3-3 5-3L361 0c3 0 5 4 3 6Z" />
    </svg>
  )
}

export const PRODUCT_URL = 'https://fund-raise.onrender.com'
export const SUPPORT_EMAIL = 'support@fund-raise.com'
