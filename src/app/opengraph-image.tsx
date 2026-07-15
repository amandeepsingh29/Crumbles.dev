import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Crumbles — production infrastructure for AI agents';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: '#f4f1e8', color: '#080a1a', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '72px', width: '100%' }}>
        <div style={{ color: '#3998e8', display: 'flex', fontSize: 24, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' }}>AI agent infrastructure</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 0.9 }}>Production systems</div>
          <div style={{ color: '#3998e8', fontSize: 92, fontWeight: 900, letterSpacing: '-0.07em', lineHeight: 0.9 }}>for agents.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 600 }}>AI SRE + source-backed context</div>
      </div>
    ),
    { ...size },
  );
}
