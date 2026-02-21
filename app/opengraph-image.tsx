import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Preet Raval – Software Engineer | Full-Stack & AI';
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '12px', height: '12px', borderRadius: '50%',
            background: '#22c55e', boxShadow: '0 0 8px #22c55e',
          }} />
          <span style={{ color: '#86efac', fontSize: '20px', fontWeight: 600 }}>
            Open to full-time roles
          </span>
        </div>

        <div style={{
          fontSize: '72px', fontWeight: 900, color: '#fff',
          letterSpacing: '-2px', textAlign: 'center', lineHeight: 1.1, marginBottom: '16px',
        }}>
          Preet Raval
        </div>

        <div style={{
          fontSize: '28px', fontWeight: 500, marginBottom: '40px', textAlign: 'center',
          background: 'linear-gradient(90deg, #60a5fa, #818cf8)',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Software Engineer · Full-Stack · AI
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Python', 'TypeScript'].map((tech) => (
            <div key={tech} style={{
              padding: '8px 20px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#cbd5e1', fontSize: '18px', fontWeight: 500,
            }}>
              {tech}
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: '40px',
          color: '#475569', fontSize: '16px',
        }}>
          preet-raval-swart.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
