import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Launchpad Solutions'
  const category = searchParams.get('category') ?? ''
  const author = searchParams.get('author') ?? ''
  const type = searchParams.get('type') ?? 'blog'

  const label =
    type === 'insights' ? 'Launchpad Insights' : type === 'case-studies' ? 'Case Study' : 'Launchpad Blog'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          background:
            'linear-gradient(135deg, #1B2A4A 0%, #FF6B2B 60%, #F5A623 100%)',
          fontFamily: 'Manrope, system-ui, sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(255, 107, 43, 0.55)',
            filter: 'blur(80px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: 200,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'rgba(245, 166, 35, 0.45)',
            filter: 'blur(80px)',
            display: 'flex',
          }}
        />

        {/* Top: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            L
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em' }}>
              Launchpad Solutions
            </div>
            <div style={{ fontSize: 16, opacity: 0.7 }}>{label}</div>
          </div>
        </div>

        {/* Middle: category pill + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, zIndex: 1, maxWidth: 960 }}>
          {category && (
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '6px 16px',
                borderRadius: 999,
                background: '#F5A623',
                color: '#1B2A4A',
                fontSize: 18,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {category}
            </div>
          )}
          <div
            style={{
              fontSize: title.length > 80 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: byline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
            fontSize: 20,
            opacity: 0.85,
          }}
        >
          <div style={{ display: 'flex' }}>{author && `By ${author}`}</div>
          <div style={{ display: 'flex' }}>launchpadsolutions.ca</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
