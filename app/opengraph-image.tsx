import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Preet Raval – DevOps & Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '60px',
          gap: '56px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Profile photo */}
        <div style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid rgba(96,165,250,0.5)',
          flexShrink: 0,
          background: '#1e293b',
        }}>
          <img
            src="https://preet-raval-swart.vercel.app/Preet%20Raval.webp"
            width={220}
            height={220}
            alt="Preet Raval"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0px' }}>
          {/* Status pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ color: '#86efac', fontSize: '18px', fontWeight: 600 }}>
              Open to full-time roles · Open to Relocate
            </span>
          </div>

          {/* Name */}
          <div style={{
            fontSize: '68px', fontWeight: 900, color: '#ffffff',
            letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '12px',
          }}>
            Preet Raval
          </div>

          {/* Title */}
          <div style={{
            fontSize: '26px', fontWeight: 500, marginBottom: '32px',
            color: '#93c5fd',
          }}>
            DevOps & Full-Stack Engineer · AI Systems
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px' }}>
            {[
              { value: '50+', label: 'Daily Users' },
              { value: '7', label: 'Production Apps' },
              { value: '99%+', label: 'Uptime' },
            ].map(({ value, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '30px', fontWeight: 900, color: '#60a5fa' }}>{value}</span>
                <span style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['Next.js', 'FastAPI', 'Python', 'Docker', 'AWS', 'PostgreSQL'].map((tech) => (
              <div key={tech} style={{
                padding: '6px 16px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#cbd5e1', fontSize: '15px', fontWeight: 500,
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Domain watermark */}
        <div style={{
          position: 'absolute', bottom: '32px', right: '60px',
          color: '#334155', fontSize: '15px',
        }}>
          preet-raval-swart.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
