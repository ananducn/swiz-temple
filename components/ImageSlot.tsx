import type { CSSProperties } from 'react';

type ImageSlotProps = {
  id: string;
  shape?: 'rect' | 'rounded' | 'circle' | 'pill';
  radius?: number;
  placeholder?: string;
  src?: string;
  objectPosition?: string;
  style?: CSSProperties;
};

/**
 * Placeholder for the original design-canvas `<x-import component-from-global-scope="image-slot">`
 * drag-and-drop slots. No real photos were embedded in the source bundle, so this renders a
 * labeled placeholder box. Pass `src` (a file under /public) once a real image is available.
 */
export default function ImageSlot({ shape = 'rounded', radius = 12, placeholder, src, objectPosition = 'center', style }: ImageSlotProps) {
  const borderRadius = shape === 'circle' ? '50%' : shape === 'pill' ? 999 : radius;

  return (
    <div
      style={{
        ...style,
        borderRadius,
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#e7e2d6,#d8d2c2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={placeholder || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition }} />
      ) : (
        <span
          style={{
            fontSize: 12,
            lineHeight: 1.4,
            color: '#8a8270',
            textAlign: 'center',
            padding: '8px 14px',
          }}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
}
